import React from "react";

const CounterCard = ({ count, title1, title2 }) => {
  return (
    <div className="w-1/2 h-full bg-zinc-200 rounded-xl flex">
      <div className="w-[45%] h-full text-4xl md:text-7xl font-extrabold flex items-center justify-center">
        <h1>{count}</h1>
      </div>
      <div className="w-[55%] h-full text-sm lg:text-2xl font-semibold flex flex-col items-start justify-center capitalize">
        <p>{title1}</p>
        <p>{title2}</p>
      </div>
    </div>
  );
};

export default CounterCard;
