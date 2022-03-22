import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filterByName, handleFilterByName } = useContext(Context);
  return (
    <div>
      <h3>Filters page</h3>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ handleFilterByName }
      />
    </div>
  );
}

export default Filters;
