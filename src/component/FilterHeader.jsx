import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterHeader() {
  const {
    data, filterByNumericValues, setFilterByNumericValues, setFilteredPlanetsList,
  } = useContext(Context);

  const createFilterOption = (columnName) => {
    const select = document.querySelector('#column');
    const option = document.createElement('option');
    option.value = columnName;
    option.innerHTML = columnName;
    select.appendChild(option);
  };

  const removeFilter = (filterObj) => {
    const arrFilters = filterByNumericValues.filter((obj) => obj !== filterObj);
    setFilteredPlanetsList(data);
    setFilterByNumericValues(arrFilters);
    createFilterOption(filterObj.column);
  };

  const removeAllFilters = () => {
    setFilteredPlanetsList(data);
    setFilterByNumericValues([]);
    filterByNumericValues.forEach((filterObj) => createFilterOption(filterObj.column));
  };

  return (
    <div>
      {
        filterByNumericValues.map((filterObj, index) => {
          const { column, comparison, value } = filterObj;
          return (
            <div key={ index } data-testid="filter">
              <p>{`${column} ${comparison} ${value}` }</p>
              <button type="button" onClick={ () => removeFilter(filterObj) }>
                X
              </button>
            </div>
          );
        })
      }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover filtros
      </button>
    </div>
  );
}

export default FilterHeader;
