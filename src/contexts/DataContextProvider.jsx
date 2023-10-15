/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import DataContext from './data';
import { getFromStorage } from '../utils/storage';

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [columnTitle, setColumnTitles] = useState(['To Do', 'In Dev', 'In QA', 'Done']);

  useEffect(() => {
    const toDoStories = getFromStorage('To Do');
    setData(toDoStories);
  }, []);

  return (
    <DataContext.Provider value={{ data, setData, columnTitle, setColumnTitles }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
