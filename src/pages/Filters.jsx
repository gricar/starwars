import React from 'react';
import FilterByColumns from '../component/FilterByColumns';
import FilterByName from '../component/FilterByName';

function Filters() {
  return (
    <div>
      <FilterByName />
      <FilterByColumns />
    </div>
  );
}

export default Filters;
