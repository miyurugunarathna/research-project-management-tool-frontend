import { Link } from "react-router-dom";

import ImageLight from "../assets/images/login-office.jpeg";
import ImageDark from "../assets/images/login-office-dark.jpeg";

export const LogIn = () => {
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
                <span className="label-text">Email</span>
              </label>
              <input
                className="mt-1 input input-bordered w-full"
                type="email"
                placeholder="john@doe.com"
              />

              <label className="mt-4 label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="mt-1 input input-bordered w-full"
                type="password"
                placeholder="***************"
              />

              <button className="mt-4 btn btn-active btn-primary w-full">
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
