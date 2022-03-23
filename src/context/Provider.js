import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchPlanets from '../services/fetchPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanetsList, setFilteredPlanetsList] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // didMount -> invoca API
  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
      setData(results);
    };
    getPlanets();
  }, [setData]);

  const context = {
    data,
    setData,
    filteredPlanetsList,
    setFilteredPlanetsList,
    hasFilter,
    setHasFilter,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
