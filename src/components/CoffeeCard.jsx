import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, supplier, photo, price } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2 p-4">
      <figure>
        <img className="h-26" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-around w-full items-center">
        <div>
          <h2>Name : {name}</h2>
          <p>Supplier : {supplier}</p>
          <p>Price : {price} Tk</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
