import React from 'react';
import AppRouter from './routes';
import DataProvider from './components/DataProvider';

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
