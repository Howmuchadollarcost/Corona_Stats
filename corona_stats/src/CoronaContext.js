import React, {createContext, useState, useEffect} from 'react';

const CoronaDataContext = createContext(); 

function CoronaDataProvider(props) {
    const [stats, setStats] = useState([]);

    const fetchCoronaData = async () => {
        try {
            const data = await fetch('https://covid19.mathdro.id/api/countries/ET');
            const res = await data.json();
            setStats(res);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    useEffect(() => {
        fetchCoronaData();
    },[]);

    return (
        <CoronaDataContext.Provider value={{stats: stats}}>
            {props.children}
        </CoronaDataContext.Provider>
    );
}

const CoronaDataConsumer = CoronaDataContext.Consumer;

export {CoronaDataProvider, CoronaDataConsumer}