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

  const showPlanetsFiltered = (filterObj) => {
    const { column, comparison, value } = filterObj;
    switch (comparison) {
    case 'maior que':
      setFilteredPlanetsList(filteredPlanetsList
        .filter((planet) => Number(planet[column]) > Number(value)));
      setHasFilter(true);
      break;
    case 'menor que':
      setFilteredPlanetsList(filteredPlanetsList
        .filter((planet) => Number(planet[column]) < Number(value)));
      setHasFilter(true);
      break;
    case 'igual a':
      setFilteredPlanetsList(filteredPlanetsList
        .filter((planet) => Number(planet[column]) === Number(value)));
      setHasFilter(true);
      break;
    default:
      setHasFilter(false);
    }
  };

  useEffect(() => {
    filterByNumericValues.forEach((filterObj) => showPlanetsFiltered(filterObj));
  }, [filterByNumericValues]);

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
