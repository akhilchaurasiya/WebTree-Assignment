import { useEffect, useState } from "react";
import "./App.css";
import fetchData from "./services/fetchData";
import Layout from "./utils/Layout";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData()
      .then((data) => setUser(data.results))
      .catch((error) => setError(error));
  }, []);
  return (
    <>
      {error ? (
        <h1>{error.message}</h1>
      ) : (
        <div className="App">
          <Layout user={user} />
        </div>
      )}
    </>
  );
}

export default App;
