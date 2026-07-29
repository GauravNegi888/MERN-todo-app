import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Loader from "./Loader";
import TaskCard from "./TaskCard";

const TaskWrapper = () => {
  const {
    tasks,
    loaded,
    displayTasks,
    handleDone,
    displayFilter,
    DropDown,
    handleDropDown,
    handleClose,
    handleTaskDelete,
    handleFormToggle,
    handleEdit,
  } = useContext(TaskContext);

  if (loaded === false) {
    return <Loader />;
  } else {
    return (
      <div className="w-full h-full">
        {displayTasks.length === 0 ? (
          <div className="w-full h-[85%] mt-5 flex flex-col items-center justify-center">
            {displayFilter === "all" ? (
              <div className="flex flex-col text-center justify-center">
                <h1 className="text-sm">No tasks yet</h1>
                <h1 className="text-sm">
                  Create your first task and start organizing your day.
                </h1>
              </div>
            ) : (
              <h1 className="text-2xl font-bold">
                {displayFilter === "completed" ? (
                  <div className="flex flex-col text-center justify-center">
                    <h1 className="text-sm">Nothing completed yet.</h1>
                    <h1 className="text-sm">Keep going—you've got this!</h1>
                  </div>
                ) : (
                  <div className="flex flex-col text-center justify-center">
                    <h1 className="text-sm">You're all caught up!</h1>
                    <h1 className="text-sm">No pending tasks right now.</h1>
                  </div>
                )}
              </h1>
            )}
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-4 overflow-y-auto w-full h-[89%] md:h-[81%] no-scrollbar pb-17 lg:pb-4">
            {/* Task-card*/}

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
        )}
      </div>
    );
  }
};

export default TaskWrapper;
