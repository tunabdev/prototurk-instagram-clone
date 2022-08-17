import React from "react";
import { useEffect, useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
//peer-valid:top-3
const Input = ({ type = "text", label, ...props }) => {
  const [show, setShowPassword] = useState(false);
  const [field, meta, helpers] = useField(props);

  return (
    <label className="relative flex border rounded-sm border-ig-border cursor-text focus-within:border-gray-400 bg-zinc-50 ">
      <input
        type={
          type === "text"
            ? "text"
            : show && type === "password"
            ? "text"
            : "password"
        }
        className={classNames({
          "w-full h-[38px] outline-none px-2  bg-zinc-50 text-xs ": true,
          "valid:pt-3": field.value,
        })}
        {...field}
        {...props}
      />
      <span
        className={classNames({
          "absolute transition-all origin-left -translate-y-1/2 pointer-events-none text-ig-gray left-2 text-xs top-1/2": true,
          "top-[10px] scale-[0.8333]": field.value,
        })}
      >
        {label}
      </span>
      {type === "password" && field.value && (
        <button
          type="button"
          className="flex items-center h-full pr-2 text-sm font-semibold"
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
