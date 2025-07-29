import React from "react";

const Solution = ({ left, right, index }) => {
  return (
    <div className="solution-row poppins">
      <div className="help left">
        <h3 className="white-txt">PROBLEM {index}</h3>
        <p className="gray-txt">{left}</p>
      </div>
      <div className="mid">
        <img src={`img/solution${index}.png`} />
      </div>
      <div className="help right">
        <h3 className="orange-txt">SOLUTION {index}</h3>
        <p className="gray-txt">{right}</p>
      </div>
    </div>
  );
};

export default Solution;
