import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Successfully Sign-Out!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/auth/signin");
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-coffee">Add Coffee</NavLink>
      </li>
      {user ? (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <li>
          <NavLink to="/auth/signin">Sign In</NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink to="/auth/users">User's</NavLink>
        </li>
      )}
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
