import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { TaskContext } from "../context/TaskContext";

const AddForm = () => {
  const { formData, onSubmit, onChange, isEditing } = useContext(TaskContext);

  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
      <InputField
        type={"text"}
        placeholder={"Task Title"}
        label={"Task Title"}
        name={"title"}
        value={formData.title}
        onChange={onChange}
      />
      <InputField
        type={"text"}
        placeholder={"Task Description"}
        label={"Task Description"}
        name={"des"}
        value={formData.des}
        onChange={onChange}
      />

      <div className="flex gap-3">
        <button
          className="text-white font-semibold text-xl w-full bg-black py-2 rounded-lg cursor-pointer"
          type="submit"
        >
          {isEditing ? "Save Changes" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default AddForm;
