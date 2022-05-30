import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { getSubmissionStore } from "../../store/submission";
import submissionRequest from "../../api/Submission/submission.request";

export const Submission = () => {
  const initialState = [
    {
      type: "",
      description: "",
    },
  ];

  const initialInput = {
    type: "",
    description: "",
  };

  const submissions = useSelector((state) => state.submission);
  const [submission, setSubmission] = useState(initialState);
  const [inputs, setInputs] = useState(initialInput);
  const dispatch = useDispatch();

  const Submission = () => {
    // const token = localStorage.getItem("token");
    // const base64Url = token.split(".")[1];
    // const base64 = base64Url.replace("-", "+").replace("_", "/");
    // const user = JSON.parse(window.atob(base64));

    submissionRequest
      .addSubmission({
        type: inputs.type,
        description: inputs.description,
      })
      .then((res) => {
        console.log(res);
        if (res.data === "Submission successfully saved") {
          setInputs(initialInput);
          toast.success("Submission success!");
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
    dispatch(getSubmissionStore()).then((response) => {
      console.log(response);
    });
  }, [dispatch]);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Create Your Submission Here
          </h1>
          <label className="label">
            <span className="label-text">Submission Type</span>
          </label>
          <input
            className="mt-1 input input-bordered w-full"
            type="text"
            name="type"
            placeholder="Enter submission type..."
            value={inputs.type}
            onChange={handleChange}
            required
          />

          <label className="mt-4 label">
            <span className="label-text">Submission Description</span>
          </label>
          <textarea
            className="mt-1 input input-bordered w-full h-24"
            type="text"
            name="description"
            placeholder="Enter Submission Description..."
            value={inputs.description}
            onChange={handleChange}
            required
          />

          <button
            className="mt-4 btn btn-active btn-primary w-full"
            onClick={Submission}>
            SAVE
          </button>
          <br />
          <br />
          <br />
          <br />

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {submission[0].id !== "" &&
                  submission.map((res) => (
                    <tr
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={res.id}>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        <td class="px-6 py-1">Hi</td>
                      </th>
                      <td class="px-6 py-1">Hello</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {/* {
              submissions.map(({type, description, id}) => {
                <h1 key={id}>
                  {type}
                  {description}
                </h1>
              })
            } */}
          </div>
        </div>
      </div>
    </div>
  );
};
