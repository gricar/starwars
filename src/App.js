import React from 'react';
import Filters from './pages/Filters';
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
