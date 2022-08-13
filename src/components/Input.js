import React from "react";
import { useEffect, useState } from "react";

//peer-valid:top-3
const Input = ({ type, label, ...props }) => {
  const [show, setShowPassword] = useState(false);

  return (
    <label
      htmlFor="user"
      className="relative flex text-xs border rounded-sm border-ig-border cursor-text focus-within:border-gray-400 bg-zinc-50 "
    >
      <input
        name="user"
        type={show && type !== "text" ? "text" : "password"}
        required
        className="  w-full h-[38px] outline-none px-2 valid:pt-3 peer bg-zinc-50 "
        {...props}
      />
      <span className="absolute transition-all origin-left -translate-y-1/2 pointer-events-none text-ig-gray top-1/2 left-2 peer-valid:top-[10px] peer-valid:scale-[0.8333] ">
        {label}
      </span>
      {type === "password" && props?.value && (
        <button
          type="button"
          className="flex items-center h-full pr-2 text-sm font-semibold "
          onClick={() => {
            setShowPassword((show) => !show);
          }}
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
};

export default Input;
