import React, { useContext } from "react";
import ChartWrapper from "./ChartWrapper";


const ChartSection = () => {

 
   
  return (
    <div className="w-full h-[50%]">
      <div className="flex justify-between h-[12%]">
        <h1 className="text-2xl font-bold">Your statistics</h1>
      </div>

      <ChartWrapper />
    </div>
  );
};

export default ChartSection;
