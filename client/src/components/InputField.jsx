import React from "react";

const InputField = ({
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label className="text-md lg:text-xl font-semibold">{label}</label>
      <input
        className={`border border-zinc-300 px-2 py-2.5 rounded-lg ${className}`}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default InputField;
