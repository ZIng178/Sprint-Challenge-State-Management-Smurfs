import React, { useState, useContext } from "react";
import axios from "axios";
import { SmurfContext } from "../context/SmurfContext";

const Forms = () => {
  const { getSmurfs, setGetSmurfs } = useContext(SmurfContext);
  const [postSmurfs, setPostSmurfs] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setPostSmurfs({ ...postSmurfs, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3333/smurfs", postSmurfs).then(res => {
      console.log("response", res.data);
      setGetSmurfs(res.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="smurf name "
        value={postSmurfs.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="age"
        placeholder=" smurf age"
        value={postSmurfs.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="height"
        placeholder="smurf height"
        value={postSmurfs.height}
        onChange={handleChange}
      />

      <input
        type="text"
        name="id"
        placeholder="smurf id"
        value={postSmurfs.id}
        onChange={handleChange}
      />

      <button className="submitbutton" type="submit">Submit</button>
    </form>
  );
};

export default Forms;
