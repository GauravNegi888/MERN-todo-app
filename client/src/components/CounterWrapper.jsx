import React, { useContext } from "react";
import CounterCard from "./CounterCard";
import { TaskContext } from "../context/TaskContext";

const CounterWrapper = () => {
  const { tasks } = useContext(TaskContext);

  const completedTask = tasks.filter((e) => e.completed === true).length;
  const pendingTask = tasks.filter((e) => e.completed === false).length;

  return (
    <div className="w-full h-[17%] lg:h-[25%] flex gap-7">
      <CounterCard
        count={completedTask.toString().padStart(2, 0)}
        title1={"Tasks"}
        title2={"Completed"}
      />
      <CounterCard
        count={pendingTask.toString().padStart(2, "0")}
        title1={"Tasks"}
        title2={"pending"}
      />
    </div>
  );
};

export default CounterWrapper;
