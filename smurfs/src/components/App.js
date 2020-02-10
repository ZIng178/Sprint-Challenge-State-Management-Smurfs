import React, { useState, useEffect } from "react";
import axios from "axios";
import { SmurfContext } from "../context/SmurfContext";
import Smurfs from "../components/Smurfs";
import SmurfsList from "../components/SmurfsList";
import Forms from "../components/Forms";
import "./App.css";
function App() {
  const [getSmurfs, setGetSmurfs] = useState([]);
  useEffect(() => {
    axios.get(" http://localhost:3333/smurfs").then(res => {
      // console.log(res))
      setGetSmurfs(res.data);
      // console.log("responseData", res.data)
    });
  }, []);

  return (
    <div className="App">
    <h1> ADD SMURFS </h1>
      <SmurfContext.Provider value={{ getSmurfs, setGetSmurfs }}>
        <Forms />
        <SmurfsList />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
