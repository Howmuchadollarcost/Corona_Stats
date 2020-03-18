import React, {useState, useEffect} from 'react';

import EthiopianMap from './component/EthiopianMap';
import WorldTable from './component/WorldTable';
import DataSetLayout from './component/DataSetLayout';


const App = () => {
  const [stats, setStats] = useState([]);

  const fetchCoronaConfirmed = async () => {
      try {
          const data = await fetch('https://covid19.mathdro.id/api/confirmed');
          const res = await data.json();
          setStats(res);
      } catch (error) {
          console.error("Error: ", error);
      }
  }

  useEffect(() => {
      fetchCoronaConfirmed();
  },[]);

  return (
    <div className="app">
      <DataSetLayout />
      <WorldTable stats={stats}/>
    </div>
  );
};

export default App;
