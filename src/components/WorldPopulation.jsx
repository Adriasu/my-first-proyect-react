import React from "react";


const WorldPopulation = ({ country, population }) => {

  return (
    <div className="flex m-auto w-[810px] justify-between">
      <div className="w-[100px]">
        <p>{country}</p>
      </div>
      <div className="w-[600px] h-[20px]">
        <div className="bg-[#ffa600] rounded h-[20px] w-[600px]"></div>
      </div>
      <div className="w-[100px]">
        <p>{population}</p>
      </div>
    </div>
  );
};

export default WorldPopulation;
