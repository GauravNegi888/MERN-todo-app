import React from "react";
import Button from "./Button";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
const TaskCard = ({
  elem,
  handleDone,
  DropDown,
  handleDropDown,
  handleClose,
  handleTaskDelete,
}) => {
  return (
    <div className="w-full h-22 shrink-0 bg-zinc-200 rounded-lg px-3 py-3 flex shadow-sm">
      <div className="w-[75%] h-full">
        <h1
          className={`text-md font-semibold ${elem.completed ? "line-through" : " "}`}
        >
          {elem.title}
        </h1>
        <p className={`line-clamp-1 ${elem.completed ? "line-through" : " "}`}>
          {elem.des}
        </p>
      </div>
      <div className="w-[25%] h-full flex items-center justify-center relative">
        <div className="absolute -top-1 -right-1 text-lg">
          {DropDown !== elem.id && (
            <PiDotsThreeVerticalBold onClick={() => handleDropDown(elem.id)} />
          )}
        </div>

        <div
          className={`w-[60%] absolute -top-1.5 -right-1 shadow-sm bg-zinc-100 px-2 gap-0.5 flex flex-col text-sm py-1 rounded-lg ${DropDown === elem.id ? "block" : "hidden"}`}
        >
          <div className="text-zinc-900 flex justify-end">
            <IoCloseOutline
              onClick={handleClose}
              className="text-right text-lg"
            />
          </div>
          <hr className="text-zinc-300" />
          <h1
            onClick={() => handleTaskDelete(elem.id)}
            className="text-red-500 cursor-pointer hover:scale-105 duration-300 transform ease-in-out"
          >
            Delete
          </h1>
          <hr className="text-zinc-300" />
          <h1 className="text-blue-500 cursor-pointer hover:scale-105 duration-300 transform ease-in-out">
            Edit
          </h1>
        </div>
        <Button
          onClick={() => handleDone(elem.id)}
          title={elem.completed ? "undo" : "done"}
          DropDown={DropDown}
          className={`
               ${elem.completed ? "bg-transparent text-black border-2" : "bg-black text-white"}
                ${DropDown === elem.id ? "hidden" : "block"}
                  `}
        />
      </div>
    </div>
  );
};

export default TaskCard;
