import React from 'react';
import FilterByColumns from '../component/FilterByColumns';
import FilterByName from '../component/FilterByName';
import FilterHeader from '../component/FilterHeader';
import OrderColumn from '../component/OrderColumn';

function Filters() {
  return (
    <div>
      <FilterByName />
      <FilterByColumns />
      <FilterHeader />
      <OrderColumn />
    </div>
  );
}

export default Filters;
