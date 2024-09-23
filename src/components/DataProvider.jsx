import React, { createContext, useState, useEffect } from 'react';
import data from '../data/data.json';

export const DataContext = createContext();

function DataProvider({ children }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(data);
  }, []);

  return (
    <DataContext.Provider value={{ listings }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
