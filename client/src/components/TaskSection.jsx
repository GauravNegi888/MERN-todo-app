import React from "react";
import TaskCard from "./TaskCard";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskSection = () => {
  const {
    displayTasks,
    handleDone,
    filters,
    handleFilter,
    DropDown,
    handleDropDown,
    handleClose,
    handleTaskDelete,
    handleFormToggle,
    handleEdit,
  } = useContext(TaskContext);

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
            className="text-md font-semibold cursor-pointer capitalize bg-zinc-200 px-5 py-1 rounded-full"
          >
            <h1>{elem.name}</h1>
          </div>
        ))}
      </div>
      {/* Task-wrapper */}
      <div className="mt-5 flex flex-col gap-4 overflow-y-auto w-full h-[81%] no-scrollbar pb-3">
        {/* Task-card */}
        {displayTasks.map((elem, index) => (
          <TaskCard
            elem={elem}
            key={elem._id}
            DropDown={DropDown}
            handleDone={handleDone}
            handleDropDown={handleDropDown}
            handleClose={handleClose}
            handleTaskDelete={handleTaskDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
