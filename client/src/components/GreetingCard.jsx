import React from "react";
import hero from "../assets/svg/Boy_svg.svg";
const GreetingCard = () => {
  return (
    <div className="greet-card h-[25%] w-full flex bg-zinc-200 rounded-xl ">
      {/* greeting-card-left  */}
      <div className="h-full w-1/2 flex justify-center flex-col gap-1 px-8">
        <h1 className="text-4xl font-extrabold capitalize">Hello Josh!</h1>
        <p className="text-md font-medium">It's good to see you again</p>
      </div>

      {/* greeting-card-right */}
      <div className="h-full w-1/2 flex items-end justify-center">
        <img className="h-[115%]" src={hero} alt="" />
      </div>
    </div>
  );
};

export default GreetingCard;
