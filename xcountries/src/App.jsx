import { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";
import { fetchData } from "./api";

function App() {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const ans = await fetchData();
      setInfo(ans);
    } catch (e) {
      const errorMessage = "Error fetching data:";
      console.error(errorMessage, e);
      setError("Failed to load data.");
      setInfo([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {error && <p className="error">{error}</p>}
      {Array.isArray(info) && info.length ? (
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
