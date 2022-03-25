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
    </div>
  );
}

export default FilterHeader;
