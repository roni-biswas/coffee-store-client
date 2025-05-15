import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { name, supplier, price, photo, details } = useLoaderData();
  return (
    <div>
      <h1 className="text-center my-12 text-3xl font-bold">Coffee Details</h1>
      <div className="border-2 w-9/12 mx-auto">
        <div className="card  card-side bg-base-100 shadow-sm p-6">
          <figure>
            <img className="mx-12 pr-14 min-w-full" src={photo} alt="Movie" />
          </figure>
          <div className="flex  w-full items-center">
            <div className="space-y-5">
              <h2>Name : {name}</h2>
              <p>Supplier : {supplier}</p>
              <p>Price : {price} Tk</p>
              <p>Details : {details}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2">
              <Link to={`/`}>
                <button className="btn btn-primary join-item">Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
