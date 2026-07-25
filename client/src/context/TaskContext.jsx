import React, { createContext, useEffect, useState } from "react";

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

  //Form Display

  const [isFormOpen, setIsFormOpen] = useState(false);

  //New form Data / state
  const [formData, setFormData] = useState({
    id: Date.now(),
    title: "",
    des: "",
    completed: false,
  });

  //Edit task
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

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

  //Delete task
  const handleTaskDelete = (id) => {
    setTasks((prev) => prev.filter((e) => e.id !== id));
  };

  //Add new Form Toggle
  const handleFormToggle = () => {
    setIsFormOpen((prev) => !prev);
  };

  //Add new task FormField onChange
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Add new task FormSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setTasks((prev) =>
        prev.map((task) => (task.id === formData.id ? formData : task)),
      );
    } else {
      setTasks((prev) => [...prev, formData]);
    }
    handleFormToggle();
    setFormData({
      id: Date.now(),
      title: "",
      des: "",
      completed: false,
    });
    setIsEditing(false);
    setEditingTask(null);
    handleClose();
  };

  //handleEdit
  const handleEdit = (task) => {
    setIsEditing(true);
    setEditingTask(task);
    handleFormToggle();
  };

  useEffect(() => {
    if (isEditing) {
      setFormData(editingTask);
    }
  }, [isEditing, editingTask]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        displayTasks,
        DropDown,
        filters,
        isFormOpen,
        formData,
        isEditing,
        editingTask,
        setTasks,
        handleDone,
        handleFilter,
        handleDropDown,
        handleClose,
        handleTaskDelete,
        handleFormToggle,
        onChange,
        onSubmit,
        handleEdit,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
