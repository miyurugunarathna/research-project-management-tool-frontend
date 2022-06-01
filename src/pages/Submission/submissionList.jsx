import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentSidebar } from "../../components/Sidebar/studentsidebar";
import { Header } from "../../components/Header";
import submissionRequest from "../../api/Submission/submission.request";

export const SubmissionList = () => {
  const [submission, setSubmission] = useState([]);

  useEffect(() => {
    submissionRequest.getSubmissions().then((res) => {
      setSubmission(res.data.data);
    });
  }, [submission]);

  return (
    <div className="flex flex-row h-screen">
      <StudentSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Submissions for Year 2022
          </h1>
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
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <td class="px-6 py-1">
                      {submission.map((sub) => (
                        <div key={sub.id}>
                          {sub.type}
                          <br />
                          <br />
                        </div>
                      ))}
                    </td>
                  </th>
                  <td class="px-6 py-1">
                    {submission.map((sub) => (
                      <div key={sub.id}>
                        {sub.description} <br />
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
