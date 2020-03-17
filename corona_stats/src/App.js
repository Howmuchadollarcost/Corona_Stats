import React, {useState, useEffect} from 'react';

import EthiopianMap from './component/EthiopianMap';
import WorldTable from './component/WorldTable';


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
      <h1>የኮቪድ-19 ስታትስቲክስ</h1>
      <EthiopianMap />
      <WorldTable stats={stats}/>
    </div>
  );
};

export default App;
