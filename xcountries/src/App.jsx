import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';
import { fetchData } from './api';

function App() {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(null);

    const getData = async () => {
    try {
      const ans = await fetchData();
      setInfo(ans);
    } catch (e) {
      console.log(e);
      setInfo([]); 
      setError('Failed to load data.');
    }
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {error && <p className="error">{error}</p>}
      {info.length ? (
        <div className="card">
          {info.map((el) => (
            <Card data={el} key={el.abbr} />
          ))}
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </>
  );
}

export default App;
