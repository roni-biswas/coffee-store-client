import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="card bg-base-100 max-w-sm mx-auto mt-12 shrink-0 shadow-2xl">
      <h2 className="text-2xl text-center">Register Account</h2>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />
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
