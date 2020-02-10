import React, { useContext } from "react";
import axios from "axios";
import { SmurfContext } from "../context/SmurfContext";
//import SmurfsList from "../components/SmurfsList"

const Smurfs = ({ smurf }) => {
  const { getSmurfs, setGetSmurfs } = useContext(SmurfContext);
  const handleDelete = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => setGetSmurfs(getSmurfs.filter(item => item.id !== id)));
  };
  return (
    <div className="smurfdisplay">
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <p>{smurf.id}</p>
      <button onClick={() => handleDelete(smurf.id)}> DELETE</button>
    </div>
  );
};

export default Smurfs;
