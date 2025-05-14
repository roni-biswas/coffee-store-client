import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
