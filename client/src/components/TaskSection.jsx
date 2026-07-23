import React from "react";
import TaskCard from "./TaskCard";
import { FaPlus } from "react-icons/fa";

const TaskSection = () => {
  const filter = ["all tasks", "pending", "completed"];

  return (
    <div className="w-full h-[75%] overflow-hidden flex flex-col gap-2">
      <div className="flex justify-between h-[9%]">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <div className="h-full flex items-center justify-center bg-black text-white p-3 text-xl rounded-lg">
          <FaPlus />
        </div>
      </div>
      {/* filter */}
      <div className="flex items-end gap-5 w-full h-[6%] px-1">
        {filter.map((elem, index) => (
          <div
            key={"index"}
            className="text-md font-semibold cursor-pointer capitalize bg-zinc-200 px-5 py-1 rounded-full"
          >
            <h1>{elem}</h1>
          </div>
        ))}
      </div>
      {/* Task-wrapper */}
      <div className="mt-5 flex flex-col gap-4 overflow-y-auto w-full h-[81%] no-scrollbar pb-3">
        {/* Task-card */}
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskSection;
