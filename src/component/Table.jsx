import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data, filteredPlanetsList, hasFilter } = useContext(Context);

  const renderTableHeader = () => {
    const tableHeader = Object.keys(data[0]).filter((column) => column !== 'residents');
    return (
      tableHeader.map((columnName, index) => <th key={ index }>{columnName}</th>)
    );
  };

  const renderTable = (planets) => (
    planets.map((planet, index) => {
      const {
        name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
        diameter, climate, gravity, terrain, surface_water: surfaceWater,
        population, films, created, edited, url,
      } = planet;
      return (
        <tr key={ index }>
          <td>{name}</td>
          <td>{rotationPeriod}</td>
          <td>{orbitalPeriod}</td>
          <td>{diameter}</td>
          <td>{climate}</td>
          <td>{gravity}</td>
          <td>{terrain}</td>
          <td>{surfaceWater}</td>
          <td>{population}</td>
          <td>{films}</td>
          <td>{created}</td>
          <td>{edited}</td>
          <td>{url}</td>
        </tr>
      );
    })
  );

  return (
    <div>
      <table>
        <caption>Starwars planets</caption>
        <thead>
          <tr>
            {
              data.length && renderTableHeader()
            }
          </tr>
        </thead>
        <tbody>
          {
            !hasFilter ? renderTable(data) : renderTable(filteredPlanetsList)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
