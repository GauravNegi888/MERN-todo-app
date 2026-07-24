import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Button = ({ title, onClick, className }) => {
  const { DropDown } = useContext(TaskContext);
  return (
    <button
      onClick={() => onClick()}
      className={` text-xl capitalize font-medium px-8 py-1 rounded-lg  ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
