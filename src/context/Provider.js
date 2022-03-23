import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchPlanets from '../services/fetchPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filteredPlanetsList, setFilteredPlanetsList] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);

  // didMount -> invoca API
  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
      setData(results);
    };
    getPlanets();
  }, [setData]);

  // didUpdate -> salva um novo array filtrados pelo nome
  useEffect(() => {
    const filteredPlanets = data.filter(({ name }) => name.includes(filterByName.name));
    setFilteredPlanetsList(filteredPlanets);
    if (filterByName.name) {
      setHasFilter(true);
    }
  }, [filterByName.name, data]);

  const handleFilterByName = ({ target }) => setFilterByName({ name: target.value });

  const context = {
    data, setData, handleFilterByName, filterByName, filteredPlanetsList, hasFilter,
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
