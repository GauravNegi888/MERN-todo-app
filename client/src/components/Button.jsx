import React from "react";

const Button = ({title, onClick, className}) => {
  return (
    <button className="bg-black text-white text-xl capitalize font-medium px-8 py-1 rounded-lg">
      {title}
    </button>
  );
};

export default Button;
