import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

function FilterByName() {
  const { data, setFilteredPlanetsList, setHasFilter } = useContext(Context);

  const [filterByName, setFilterByName] = useState({ name: '' });

  const handleFilterByName = ({ target }) => setFilterByName({ name: target.value });

  // didUpdate -> salva um novo array filtrados pelo nome
  useEffect(() => {
    const filteredPlanets = data.filter(({ name }) => name.includes(filterByName.name));
    setFilteredPlanetsList(filteredPlanets);
    if (filterByName.name) {
      setHasFilter(true);
    } else {
      setHasFilter(false);
    }
  }, [filterByName.name, data, setFilteredPlanetsList, setHasFilter]);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ handleFilterByName }
      />
    </div>
  );
}

export default FilterByName;
