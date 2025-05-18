import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    // create user
    createUser(email, password)
      .then((result) => {
        // save profile in the database
        if (result.user) {
          fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userProfile),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "User created Successfully!",
                  icon: "success",
                  draggable: true,
                });
              }
            });
        }
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto mt-12 shrink-0 shadow-2xl">
      <h2 className="text-2xl text-center">Register Account</h2>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">First Name</label>
          <input
            type="text"
            name="first-name"
            className="input"
            placeholder="First name"
          />
          <label className="label">Last Name</label>
          <input
            type="text"
            name="last-name"
            className="input"
            placeholder="Last name"
          />
          <label className="label">Phone Number</label>
          <input
            type="text"
            name="phone-number"
            className="input"
            placeholder="Phone number"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Sign Up
          </button>
        </form>
        <p>
          already you have an account?{" "}
          <Link className="text-indigo-600" to="/auth/signin">
            Sign-in
          </Link>
        </p>
        {/* Google */}
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Start with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
