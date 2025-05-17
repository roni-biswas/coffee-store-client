import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
