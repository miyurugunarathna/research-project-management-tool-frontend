import React, { useState, useEffect } from "react";
import { StudentSidebar } from "../../components/Sidebar/studentsidebar";
import { Header } from "../../components/Header";
import submissionRequest from "../../api/Submission/submission.request";
import groupRequest from "../../api/StudentGroup/student-group.request";
import userRequest from "../../api/User/user.request";
import stageRequest from "../../api/Stage/stage.request";

export const Stage = () => {
  const initialInput = {
    submissionType: "",
    status: true,
    reviewer: "",
    marksheet: "",
    result: "",
    document: "",
    dueDate: "",
    group: "",
  };

  const [submission, setSubmission] = useState([]);
  const [inputs, setInputs] = useState(initialInput);
  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);

  const Stage = () => {
    // const token = localStorage.getItem("token");
    // const base64Url = token.split(".")[1];
    // const base64 = base64Url.replace("-", "+").replace("_", "/");
    // const user = JSON.parse(window.atob(base64));

    stageRequest
      .addStage({
        submissionType: inputs.submissionType,
        status: true,
        reviewer: inputs.reviewer,
        marksheet: "",
        result: "",
        document: "",
        dueDate: "",
        group: inputs.group,
      })
      .then((res) => {
        console.log(res);
        if (res.data === "Stage successfully saved") {
          setInputs(initialInput);
          toast.success("Stage success!");
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

  useEffect(() => {
    submissionRequest.getSubmissions().then((res) => {
      console.log(res);
      console.log(res.data.data[0].description);
      setSubmission(res.data.data);
    });
  }, []);

  useEffect(() => {
    groupRequest.getStudentGroup().then((res) => {
      console.log(res);
      setGroup(res.data.data);
    });
  }, []);

  useEffect(() => {
    userRequest.getAllUsers().then((res) => {
      console.log(res);
      setUser(res.data.data);
    });
  }, []);

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
            aria-label="Default select example"
            name="submissionType"
            value={inputs.submissionType}
            onChange={handleChange}>
            <option selected>---Select a Submission Type---</option>
            {submission.map((sub) => (
              <option value={sub.type} key={sub.id}>
                {sub.type}
              </option>
            ))}
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
            aria-label="Default select example"
            name="reviewer"
            value={inputs.reviewer}
            onChange={handleChange}>
            <option selected>---Select your reviewer here---</option>
            {user.map((u) => (
              <option value={u.firstName} key={u.id}>
                {u.firstName}
              </option>
            ))}
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
            aria-label="Default select example"
            name="group"
            value={inputs.group}
            onChange={handleChange}>
            <option selected>---Select your group here---</option>
            {group.map((grp) => (
              <option value={inputs.group} key={grp.id}>
                {grp.groupName}
              </option>
            ))}
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

          <button
            className="mt-4 btn btn-active btn-primary w-full"
            onClick={Stage}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
