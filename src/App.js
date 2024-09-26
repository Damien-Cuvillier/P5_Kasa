import React from 'react';
import AppRouter from './routes';
import DataProvider from './components/DataProvider';
import './Fontawesome';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <AppRouter />
      </div>
    </DataProvider>
  );
}

export default App;
