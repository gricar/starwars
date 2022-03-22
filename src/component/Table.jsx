import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import fetchPlanets from '../services/fetchPlanets';

function Table() {
  const { planetsList, setPlanetsList } = useContext(Context);

  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
      setPlanetsList(results);
    };
    getPlanets();
  }, [setPlanetsList]);

  return (
    <h2>Table of planets</h2>
  );
}

export default Table;
