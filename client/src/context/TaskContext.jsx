import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  //Raw Data
  const [tasks, setTasks] = useState([]);

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
    title: "",
    des: "",
    completed: false,
  });

  //Edit task
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  //Data is loaded or Not
  const [loaded, setloaded] = useState(false);

  //API Call Function
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/tasks");
      setTasks(res.data.allTasks);
    } catch (error) {
      console.log(error.message);
    }
  };

  //API Call to get Data
  useEffect(() => {
    getData();
    setloaded(true);
  }, []);

  //Fliter Logic to get a filtered array
  const displayTasks = tasks.filter((elem) => {
    if (displayFilter === "all") return true;
    if (displayFilter === "pending") return !elem.completed;
    if (displayFilter === "completed") return elem.completed;
  });

  //HandleDone Button logic
  const handleDone = async (_id, current) => {
    try {
      await axios.put(`http://localhost:8000/api/tasks/${_id}`, {
        completed: !current,
      });
      setTasks((prev) =>
        prev.map((elem, index) =>
          elem._id === _id ? { ...elem, completed: !elem.completed } : elem,
        ),
      );
      if (current === true) {
        toast.error("Task Undo");
      } else {
        toast.success("Task Completed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //handleFilter Button logic
  const handleFilter = (val) => {
    setDisplayFilter(val);
  };

  //handleDropDown and Button
  const handleDropDown = (_id) => {
    setDropDown(_id);
  };

  //handleDropDown Close
  const handleClose = () => {
    setDropDown(null);
  };

  //Delete task
  const handleTaskDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${_id}`);
      setTasks((prev) => prev.filter((e) => e._id !== _id));
      toast.success("Task Deleted.");
    } catch (error) {
      console.log(error.message);
    }
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

  //AddNewTask
  const createTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/tasks/",
        formData,
      );
      setTasks((prev) => [...prev, res.data.newTask]);
      toast.success("New Task is Added");
    } catch (error) {
      console.log(error.message);
    }
  };

  //handleEdit
  const handleEdit = (task) => {
    setIsEditing(true);
    setEditingTask(task);
    handleFormToggle();
  };

  //handleUpdate
  const handleUpdate = async (_id) => {
    try {
      await axios.put(`http://localhost:8000/api/tasks/${_id}`, formData);
      setTasks((prev) =>
        prev.map((task) => (task._id === formData._id ? formData : task)),
      );
      toast.success("Task is Updated");
    } catch (error) {
      console.log(error.message);
    }
  };

  //Add new task FormSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      handleUpdate(formData._id);
      handleFormToggle();
    } else {
      if (formData.title.length == 0 || formData.des.length == 0) {
        toast.error("Fill the fields.");
      } else {
        createTask();
        handleFormToggle();
      }
    }
    setFormData({
      title: "",
      des: "",
      completed: false,
    });
    setIsEditing(false);
    setEditingTask(null);
    handleClose();
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
        displayFilter,
        isFormOpen,
        formData,
        isEditing,
        editingTask,
        loaded,
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
