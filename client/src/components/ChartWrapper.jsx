import React, { useContext } from "react";
import ProductivityChart from "./ProductivityChart";
import { TaskContext } from "../context/TaskContext";

const ChartWrapper = () => {
  const { tasks } = useContext(TaskContext);

  const chartData = [
    { day: "Mon", tasks: 0 },
    { day: "Tue", tasks: 0 },
    { day: "Wed", tasks: 0 },
    { day: "Thu", tasks: 0 },
    { day: "Fri", tasks: 0 },
    { day: "Sat", tasks: 0 },
    { day: "Sun", tasks: 0 },
  ];

  const today = new Date();

  const currentDay = today.getDay();

  const daysSinceMonday = currentDay === 0 ? 6 : currentDay - 1;

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - daysSinceMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  tasks.forEach((task) => {
    if (!task.completedAt) return;

    const completedDate = new Date(task.completedAt);

    if (completedDate >= startOfWeek && completedDate <= endOfWeek) {
      const day = completedDate.getDay();

      const chartIndex = day === 0 ? 6 : day - 1;

      chartData[chartIndex].tasks++;
    }
  });

  console.log(chartData);

  return (
    <div className="w-full h-[91%]">
      <ProductivityChart data={chartData} />
    </div>
  );
};

export default ChartWrapper;
