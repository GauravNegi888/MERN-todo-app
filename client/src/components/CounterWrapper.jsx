import React from "react";
import CounterCard from "./CounterCard";

const CounterWrapper = () => {
  return (
    <div className="w-full h-[25%] flex gap-7">
      <CounterCard count={"11"} title1={"Tasks"} title2={"Completed"} />
      <CounterCard count={"04"} title1={"Tasks"} title2={"pending"} />
    </div>
  );
};

export default CounterWrapper;
