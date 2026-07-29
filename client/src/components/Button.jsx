import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Button = ({ title, onClick, className }) => {
  const { DropDown } = useContext(TaskContext);
  return (
    <button
      onClick={() => onClick()}
      className={`text-md md:text-xl capitalize font-medium px-5 lg:px-6 py-0 lg:py-0.5 rounded-lg  ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
