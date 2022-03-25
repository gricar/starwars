import React, { useContext } from 'react';
import Context from '../context/Context';

function OrderColumn() {
  const { order, setOrder } = useContext(Context);

  const handleOrderChange = ({ target: { name, value } }) => {
    setOrder({
      ...order,
      [name]: value,
    });
  };

  return (
    <form>
      <label htmlFor="column">
        Ordenar
        <select
          data-testid="column-sort"
          name="column"
          id="column"
          value={ order.column }
          onChange={ handleOrderChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="ASC">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          id="ASC"
          value="ASC"
          onChange={ handleOrderChange }
        />
        Ascendente
      </label>
      <label htmlFor="DESC">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          id="DESC"
          value="DESC"
          onChange={ handleOrderChange }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="button-filter"
        // onClick={ handleSubmitOrder }
      >
        Ordenar
      </button>
    </form>
  );
}

export default OrderColumn;
