import React, { useState } from "react";
import Icon from "./Icon";
import { AiFillCloseCircle } from "react-icons/ai";
import classNames from "classnames";
//
export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[268px] relative group">
      <span
        className={classNames({
          "absolute top-0 left-0 flex items-center justify-center  h-9 w-9 pointer-events-none ": true,
          hidden: open,
        })}
      >
        <Icon name="search" />
      </span>
      <input
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        type="text"
        className="w-full rounded outline-none h-9 pl-9 bg-ig-lightgray focus:pl-3"
        placeholder="Search"
      />
      <button
        onClick={() => setOpen(false)}
        className={classNames({
          "absolute hidden text-[#c7c7c7] top-0 right-0 w-9 h-9 items-center justify-center focus:hidden ": true,
          "!flex": open,
        })}
      >
        <AiFillCloseCircle />
      </button>
    </div>
  );
}
