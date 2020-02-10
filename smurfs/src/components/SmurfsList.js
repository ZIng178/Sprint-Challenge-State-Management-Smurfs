import React, { useContext, useState } from "react";
import { SmurfContext } from "../context/SmurfContext";
import Smurfs from "../components/Smurfs";

const SmurfList = () => {
  const { getSmurfs } = useContext(SmurfContext);
  return (
    <div className="smurf-list">
      {getSmurfs.map(item => {
        return <Smurfs key={item.id} smurf={item} />;
      })}
    </div>
  );
};

export default SmurfList;
