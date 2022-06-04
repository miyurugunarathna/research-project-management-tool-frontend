import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar/index.jsx";
import markSheetRequest from "../../api/Marksheet/marksheet.request";

export const Marks = () => {
  const initialState = [
    {
      criteria: "",
      distribution: "",
    },
  ];

  const [marksheet, setMarksheet] = useState(initialState);

  useEffect(() => {
    markSheetRequest.getMarksheets().then((res) => {
      console.log(res.data.data);
      setMarksheet(res.data.data);
    });
  });

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Marksheet for Year 2022
          </h1>
          <br />
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Criteria
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Distribution
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <td class="px-6 py-1">
                      {marksheet.map((mark) => (
                        <div key={mark.id}>
                          {mark.criteria}
                          <br />
                          <br />
                        </div>
                      ))}
                    </td>
                  </th>
                  <td class="px-6 py-1">
                    {marksheet.map((mark) => (
                      <div key={mark.id}>
                        {mark.distribution}
                        <br />
                        <br />{" "}
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
