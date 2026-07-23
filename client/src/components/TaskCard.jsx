import React from "react";
import Button from "./Button";

const TaskCard = () => {
  return (
    <div className="w-full h-22 shrink-0 bg-zinc-200 rounded-lg px-3 py-3 flex shadow-sm">
      <div className="w-[75%] h-full">
        <h1 className="text-xl font-semibold">Title</h1>
        <p className="line-clamp-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          quia?
        </p>
      </div>
      <div className="w-[25%] h-full flex items-center justify-center">
        <Button title={"done"} />
      </div>
    </div>
  );
};

export default TaskCard;
