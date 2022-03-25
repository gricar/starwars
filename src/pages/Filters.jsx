import React from 'react';
import FilterByColumns from '../component/FilterByColumns';
import FilterByName from '../component/FilterByName';
import FilterHeader from '../component/FilterHeader';

function Filters() {
  return (
    <div>
      <FilterByName />
      <FilterByColumns />
      <FilterHeader />
    </div>
  );
}

export default Filters;
