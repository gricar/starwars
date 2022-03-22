import React from 'react';
import Filters from './component/Filters';
import Table from './component/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
