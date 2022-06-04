import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import React, { useState, useEffect } from "react";
import userRequest from "../api/User/user.request";
import { login } from "../store/user";

import ImageLight from "../assets/images/login-office.jpeg";
import ImageDark from "../assets/images/login-office-dark.jpeg";

export const LogIn = () => {
  const signdata = {
    userName: "",
    password: "",
  };

  const [inputs, setInputs] = useState(signdata);
  let navigate = useNavigate();

  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loginuser = () => {
    // const token = localStorage.getItem("token");
    // const base64Url = token.split(".")[1];
    // const base64 = base64Url.replace("-", "+").replace("_", "/");
    // const user = JSON.parse(window.atob(base64));

    userRequest
      .login({
        userName: inputs.userName,
        password: inputs.password,
      })
      .then((res) => {
        window.location.reload();
        console.log((res.status = 200));
        if (res.data) {
          setInputs(signdata);
          toast.success("Logged in successfully!");
        } else {
          toast.error("Something went wrong!");
        }
        navigate("/login");
      });
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/");
    }
  }, [state.isLoggedIn]);

  useEffect(() => {
    if (state.isLoggedIn && !state.error) {
      toast.success("Login Successful!");
    }
    if (!state.isLoggedIn && state.error) {
      toast.error("Login failed!");
    }
  }, [state.isLoggedIn, state.error]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
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
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-6 text-2xl text-center font-semibold text-gray-700 dark:text-gray-200">
                Research Project Management Tool
              </h1>
              <hr className="opacity-10 mb-4" />
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>

              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                className="mt-1 input input-bordered w-full"
                type="text"
                id="userName"
                name="userName"
                value={inputs.userName}
                onChange={handleChange}
                placeholder="Enter User Name"
              />

              <label className="mt-4 label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="mt-1 input input-bordered w-full"
                type="password"
                id="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                placeholder="***************"
              />

              <button
                onClick={loginuser}
                className="mt-4 btn btn-active btn-primary w-full">
                Log in
              </button>

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/">
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/signup">
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
