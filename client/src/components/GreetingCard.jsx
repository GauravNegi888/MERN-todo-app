import React, { useContext } from "react";
import hero from "../assets/svg/Boy_svg.svg";
import { TaskContext } from "../context/TaskContext";

const GreetingCard = () => {
  const { username } = useContext(TaskContext);

  return (
    <div className="greet-card w-full h-[150px] lg:h-[25%] flex justify-between bg-zinc-200 rounded-xl">
      {/* Greeting Card Left */}
      <div className="h-full w-1/2 flex justify-center flex-col gap-1 px-4  lg:px-">
        <h1 className="text-2xl lg:text-3xl font-extrabold capitalize">
          Hello there!
        </h1>

        <p className="text-xs sm:text-sm md:text-base font-medium">
          It's good to see you again
        </p>
      </div>

      {/* Greeting Card Right */}
      <div className="h-full w-1/2 flex items-end justify-center md:justify-end md:pr-5 lg:pr-0 lg:justify-center">
        <img
          className="h-[90%] sm:h-full lg:h-[115%] object-contain"
          src={hero}
          alt="Greeting Illustration"
        />
      </div>
    </div>
  );
};

export default GreetingCard;
