import React from "react";

const WorldPopulation = ({ country, population }) => {
  function barsOfTheGraph(populationSize) {
    const result = ((600 * populationSize) / 7693165599).toFixed(0);
    return `${result}px`;
  }
  

  return (
    <div className="flex m-auto w-[810px] justify-between">
      <div className="w-[100px]">
        <p>{country}</p>
      </div>
      <div className="w-[600px] h-[20px]">
        <div 
        style={{width: `${barsOfTheGraph(population)}`}}
        className={`bg-[#ffa600] rounded h-[20px]`}></div>
      </div>
      <div className="w-[100px]">
        <p>{population.toLocaleString("en")}</p>
      </div>
    </div>
  );
};

export default WorldPopulation;
