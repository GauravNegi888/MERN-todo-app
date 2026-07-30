import React, { useContext } from "react";
import AddForm from "./AddForm";
import { TaskContext } from "../context/TaskContext";
import { IoCloseOutline } from "react-icons/io5";

const FormContainer = () => {
  const { isFormOpen, handleFormToggle, isEditing } = useContext(TaskContext);
  return (
    <div
      className={`w-[90%] md:max-w-3xl bg-white rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 overflow-hidden ${isFormOpen ? "block" : "hidden"}`}
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-6 bg-black py-5 relative">
        <h1 className="text-2xl lg:text-4xl  font-extrabold text-zinc-100">
          {isEditing ? "Editing Task" : "New Task"}
        </h1>
        <p className="text-zinc-200 text-center text-xs md:text-sm">
          {isEditing
            ? "Update the details below to keep your task accurate and up to date."
            : "Fill in the details below to add a new task."}
        </p>
        <div className="absolute top-2 right-2 text-zinc-100">
          <IoCloseOutline onClick={handleFormToggle} className="text-4xl" />
        </div>
      </div>
      <div className="px-5 py-5">
        <AddForm />
      </div>
    </div>
  );
};

export default FormContainer;
