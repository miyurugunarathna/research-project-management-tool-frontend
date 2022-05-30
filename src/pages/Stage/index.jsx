import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentSidebar } from "../../components/Sidebar/studentsidebar";
import { Header } from "../../components/Header";

export const Stage = () => {
  return (
    <div className="flex flex-row h-screen">
      <StudentSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Make your submission here
          </h1>

          <select
            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
       bg-clip-padding bg-no-repeat
      border border-solid
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700  focus:border-blue-600 focus:outline-none"
            aria-label="Default select example">
            <option selected>---Select a Submission Type---</option>
            <option value="1">Submission 1</option>
            <option value="2">Submission 2</option>
            <option value="3">Submission 3</option>
          </select>
          <br />

          <select
            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
       bg-clip-padding bg-no-repeat
      border border-solid
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700  focus:border-blue-600 focus:outline-none"
            aria-label="Default select example">
            <option selected>---Select your reviewer here---</option>
            <option value="1">Reviewer 1</option>
            <option value="2">Reviewer 2</option>
            <option value="3">Reviewer 3</option>
          </select>
          <br />

          <select
            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
       bg-clip-padding bg-no-repeat
      border border-solid
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700  focus:border-blue-600 focus:outline-none"
            aria-label="Default select example">
            <option selected>---Select your group here---</option>
            <option value="1">Group 1</option>
            <option value="2">Group 2</option>
            <option value="3">Group 3</option>
          </select>

          <div class="m-4">
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:border-gray-300">
                <div class="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Click here to Attach your submission
                  </p>
                </div>
                <input type="file" class="opacity-0" />
              </label>
            </div>
          </div>

          <button className="mt-4 btn btn-active btn-primary w-full">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
