import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = props => {
  //Data from Github API
  const [data, setData] = useState([]);

  const fetchCoronaData = async () => {
    try {
      const data = await fetch("https://covid19.mathdro.id/api/countries/ET");
      const res = await data.json();
      setData(res);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchCoronaData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data: data
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
