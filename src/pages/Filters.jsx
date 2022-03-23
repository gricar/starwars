import React from 'react';
import FilterByDropdowns from '../component/FilterByDropdowns';
import FilterByName from '../component/FilterByName';

function Filters() {
  return (
    <div>
      <FilterByName />
      <FilterByDropdowns />
    </div>
  );
}

export default Filters;
