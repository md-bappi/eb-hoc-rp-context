import React from "react";

const JerseyMacker = ({ name, jerceyNumber }) => {
  return (
    <div>
      <h1>name: {name.toUpperCase()}</h1>
      <h1>number: {jerceyNumber}</h1>
    </div>
  );
};

export default JerseyMacker;
