import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-coffee">Add Coffee</NavLink>
      </li>
      <li>
        <NavLink to="/auth/signin">Sign In</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-base-100 shadow-sm">
        <div className="flex justify-center">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
