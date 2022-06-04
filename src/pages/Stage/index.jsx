import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar/index.jsx";
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
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Make your submission here
          </h1>

          <select
            className="mt-1 input input-bordered w-full"
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
          <br />

          <select
            className="mt-1 input input-bordered w-full"
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
          <br />

          <select
            className="mt-1 input input-bordered w-full"
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
          <br />
          <br />
          <input
            className="mt-1 input input-bordered w-full"
            type="text"
            name="type"
            placeholder="Enter the accessible onedrive/googledrive link for your documents"
            required
          />
          <br />
          <br />

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
