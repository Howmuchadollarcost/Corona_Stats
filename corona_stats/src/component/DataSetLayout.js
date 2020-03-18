import React, { useState, useEffect } from "react";
import "./datasetlayout.css";

function DataSetLayout() {
  const [ethiopiaStats, setEthiopiaStats] = useState([]);

  const fetchCoronaStatsInEthiopia = async () => {
    try {
      const data = await fetch("https://covid19.mathdro.id/api/countries/ET");
      const res = await data.json();
      setEthiopiaStats(res);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchCoronaStatsInEthiopia();
  }, []);
  return (
    <>
      {ethiopiaStats.confirmed ? (
        <div className="container">
          <h1 className="page-title">የኮቪድ-19 ስታትስቲክስ (ኢትዮጵያ)</h1>
          <hr />
          <div className="row">
            <div className="col">
              <div className="data-number">
              <h2>{ethiopiaStats.confirmed.value}</h2>
              </div>
              <div className="title">
                <h3>የተጠቁ</h3>
              </div>
            </div>
            <div className="col">
              <div className="data-number">
              <h2>{ethiopiaStats.recovered.value}</h2>
              </div>
              <div className="title">
                <h3>ያገገሙ</h3>
              </div>
            </div>
            <div className="col">
              <div className="data-number">
                <h2>{ethiopiaStats.deaths.value}</h2>
              </div>
              <div className="title">
                <h3>ሞት</h3>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DataSetLayout;
