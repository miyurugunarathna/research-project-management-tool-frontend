import React, { useState, useEffect } from "react";
import { SupervisorSidebar } from "../../components/Sidebar/supervisorsidebar";
import { Header } from "../../components/Header";
import submissionRequest from "../../api/Submission/submission.request";
import stageRequest from "../../api/Stage/stage.request";

export const CheckStage = () => {
  const [submission, setSubmission] = useState([]);
  const [stage, setStage] = useState([]);

  useEffect(() => {
    submissionRequest.getSubmissions().then((res) => {
      setSubmission(res.data.data);
    });
  }, [submission]);

  useEffect(() => {
    stageRequest.getStages().then((res) => {
      console.log(res.data.data);
      setStage(res.data.data);
    });
  }, []);

  return (
    <div className="flex flex-row h-screen">
      <SupervisorSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-32 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Submissions from Students
          </h1>
          <br />

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Submision Type
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Document
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <td class="px-6 py-1">
                      {stage.map((s) => (
                        <div key={s.id}>
                          {s.submissionType.type}
                          <br />
                          <br />
                        </div>
                      ))}
                    </td>
                  </th>
                  <td class="px-6 py-1">
                    {stage.map((s) => (
                      <div key={s.id}>
                        {s.document} <br />
                        <br />
                      </div>
                    ))}
                  </td>
                  <td class="px-6 py-1">
                    {stage.map((s) => (
                      <div key={s.id}>
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          <button>Update the results</button>
                        </a>
                        <br />
                        <br />
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
