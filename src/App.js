import React from 'react';
import AppRouter from './routes';
import DataProvider from './components/DataProvider';
import HousingDetails from './components/HousingDetails';
import { BrowserRouter as Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <AppRouter />
        <Route path="/housing/:id" component={HousingDetails} />
      </div>
    </DataProvider>
  );
}

export default App;
