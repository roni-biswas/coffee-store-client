import React from "react";
import { useLoaderData } from "react-router";

const UpdateCoffee = () => {
  const { _id } = useLoaderData();

  return (
    <div>
      <h2>Update Coffee</h2>
    </div>
  );
};

export default UpdateCoffee;
