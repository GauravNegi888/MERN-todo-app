import React from "react";
import TaskCard from "./TaskCard";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Loader from "./Loader.jsx";
import TaskWrapper from "./TaskWrapper.jsx";

const TaskSection = () => {
  const { filters, displayFilter, handleFilter, handleFormToggle } =
    useContext(TaskContext);

  const handleFilters = (fil) => {
    setTasks((prev) => prev.filter((e) => e.completed === fil));
  };

  return (
    <div className="w-full h-[75%] overflow-hidden flex flex-col gap-2">
      <div className="flex justify-between h-[9%]">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <div
          onClick={() => handleFormToggle()}
          className="h-full flex items-center justify-center bg-black text-white p-3 text-xl rounded-lg cursor-pointer"
        >
          <FaPlus />
        </div>
      </div>
      {/* filter */}
      <div className="flex items-end gap-5 w-full h-[6%] px-1">
        {filters.map((elem, index) => (
          <div
            onClick={() => handleFilter(elem.val)}
            key={elem.id}
            className={`text-md font-semibold cursor-pointer capitalize  px-5 py-1 rounded-full hover:scale-110 transform duration-300 ease-in-out ${displayFilter === elem.val ? "bg-black text-white scale-105" : "bg-zinc-200"}`}
          >
            <h1>{elem.name}</h1>
          </div>
        ))}
      </div>
      {/* Task-wrapper */}

      <TaskWrapper />
    </div>
  );
};

export default TaskSection;
