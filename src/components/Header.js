import { logout } from "firebase.js";
import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "svg/HeaderLogo";
import Search from "./Search";
//
export const Header = () => {
  return (
    <header className="h-[60px] bg-white border-b border-gray-300   ">
      <div className="flex items-center justify-between h-[60px] container mx-auto ">
        <Link to="/">
          <HeaderLogo />
        </Link>
        <Search />
        <nav>
            <button onClick={logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
};
