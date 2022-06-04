import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import ImageLight from "../assets/images/login-office.jpeg";
import ImageDark from "../assets/images/login-office-dark.jpeg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userRequest from "../api/User/user.request";

export const SignUp = () => {
  const initialUserData = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    role: "",
    password: "",
  };

  const [inputs, setInputs] = useState(initialUserData);
  const dispatch = useDispatch();

  const Adduser = () => {
    // const token = localStorage.getItem("token");
    // const base64Url = token.split(".")[1];
    // const base64 = base64Url.replace("-", "+").replace("_", "/");
    // const user = JSON.parse(window.atob(base64));

    userRequest
      .addUser({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        userName: inputs.userName,
        email: inputs.email,
        role: inputs.role,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.data === "Successfully registered.") {
          setInputs(initialUserData);
          toast.success("User Adition success!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/3">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-2/3">
            <div className="w-full">
              <h1 className="mb-6 text-2xl text-center font-semibold text-gray-700 dark:text-gray-200">
                Research Project Management Tool
              </h1>
              <hr className="opacity-10 mb-4" />
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <div className="flex flex-col sm:flex-row sm:gap-3">
                <div className="sm:w-1/2">
                  <label className="label">
                    <span className="label-text">First name</span>
                  </label>
                  <input
                    className="mt-1 input input-bordered w-full"
                    type="text"
                    placeholder="Jhon"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="sm:w-1/2">
                  <label className="label">
                    <span className="label-text">Last name</span>
                  </label>
                  <input
                    className="mt-1 input input-bordered w-full"
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-3">
                <div className="sm:w-1/2">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    className="mt-1 input input-bordered w-full"
                    type="text"
                    placeholder="johndoe"
                    name="userName"
                    value={inputs.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="sm:w-1/2">
                  <label className="label">
                    <span className="label-text">Role</span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={handleChange}
                    value={inputs.role}
                    required
                    name="role">
                    <option value="STUDENT" selected>
                      Student
                    </option>
                    <option value="SUPERVISOR">Supervisor</option>
                    <option value="COSUPERVISOR">Co-Supervisor</option>
                    <option value="PANELMEMBER">Panel Member</option>
                  </select>
                </div>
              </div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="mt-1 input input-bordered w-full"
                type="email"
                placeholder="john@doe.com"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                required
              />

              <label className="mt-4 label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="mt-1 input input-bordered w-full"
                type="password"
                placeholder="***************"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                required
              />

              <button
                className="mt-4 btn btn-active btn-primary w-full"
                onClick={Adduser}>
                Sign Up
              </button>

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login">
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
