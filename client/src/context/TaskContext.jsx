import React, { createContext, useState } from "react";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  //Raw Data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Project",
      des: "Finish the responsive frontend and implement all UI components.",
      completed: false,
    },
    {
      id: 2,
      title: "Practice DSA",
      des: "Solve 3-4 problems from the Striver DSA Sheet.",
      completed: true,
    },
    {
      id: 3,
      title: "Push Code to GitHub",
      des: "Commit today's progress with a meaningful commit message.",
      completed: false,
    },
    {
      id: 4,
      title: "Learn Express.js Basics",
      des: "Understand routing, middleware, and REST API fundamentals.",
      completed: false,
    },
    {
      id: 5,
      title: "Review JavaScript Concepts",
      des: "Revise ES6 features, promises, async/await, and array methods.",
      completed: true,
    },
    {
      id: 6,
      title: "Build Todo App Backend",
      des: "Create CRUD APIs using Express and MongoDB.",
      completed: false,
    },
  ]);

  //Filter options
  const filters = [
    {
      id: 1,
      name: "All Tasks",
      val: "all",
    },
    {
      id: 2,
      name: "Pending",
      val: "pending",
    },
    {
      id: 3,
      name: "Completed",
      val: "completed",
    },
  ];

  //State for Filter
  const [displayFilter, setDisplayFilter] = useState("all");

  //dropDown and Button display
  const [DropDown, setDropDown] = useState(null);

  //Fliter Logic to get a filtered array
  const displayTasks = tasks.filter((elem) => {
    if (displayFilter === "all") return true;
    if (displayFilter === "pending") return !elem.completed;
    if (displayFilter === "completed") return elem.completed;
  });

  //HandleDone Button logic
  const handleDone = (id) => {
    console.log(id);
    setTasks((prev) =>
      prev.map((elem, index) =>
        elem.id === id ? { ...elem, completed: !elem.completed } : elem,
      ),
    );
  };

  //handleFilter Button logic
  const handleFilter = (val) => {
    setDisplayFilter(val);
    console.log(displayFilter);
  };

  //handleDropDown and Button
  const handleDropDown = (id) => {
    setDropDown(id);
  };

  //handleDropDown Close
  const handleClose = () => {
    setDropDown(null);
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        displayTasks,
        DropDown,
        filters,
        handleDone,
        handleFilter,
        handleDropDown,
        handleClose
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
