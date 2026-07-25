import React, { useContext } from "react";
import AddForm from "./AddForm";
import { TaskContext } from "../context/TaskContext";

const FormContainer = () => {
  const { isFormOpen } = useContext(TaskContext);
  return (
    <div
      className={`w-3xl bg-white rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 overflow-hidden ${isFormOpen ? "block" : "hidden"}`}
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-6 bg-black py-5">
        <h1 className="text-4xl font-extrabold text-zinc-100">New Task</h1>
        <p className="text-zinc-200 text-center">
          Fill in the details below to add a new task.
        </p>
      </div>
      <div className="px-5 py-5">
        <AddForm />
      </div>
    </div>
  );
};

export default FormContainer;
