import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { getMarksheetstore } from "../../store/marksheet";
import markSheetRequest from "../../api/Marksheet/marksheet.request";

export const MarkSheet = () => {
  const initialState = [
    {
      criteria: "",
      distribution: "",
    },
  ];

  const initialInput = {
    criteria: "",
    distribution: "",
  };

  const marksheets = useSelector((state) => state.marksheet);
  const [marksheet, setMarksheet] = useState(initialState);
  const [inputs, setInputs] = useState(initialInput);
  const dispatch = useDispatch();

  const MarkSheet = () => {
    // const token = localStorage.getItem("token");
    // const base64Url = token.split(".")[1];
    // const base64 = base64Url.replace("-", "+").replace("_", "/");
    // const user = JSON.parse(window.atob(base64));

    markSheetRequest
      .addMarksheet({
        criteria: inputs.criteria,
        distribution: inputs.distribution,
      })
      .then((res) => {
        console.log(res);
      });

    setInputs("");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  useEffect(() => {
    dispatch(getMarksheetstore()).then((response) => {
      // console.log(response);
    });
  }, [dispatch]);

  useEffect(() => {
    markSheetRequest.getMarksheets().then((res) => {
      console.log(res.data.data);
      setMarksheet(res.data.data);
    });
  }, [marksheet]);

  const DeleteMarksheet = (id) => {
    markSheetRequest.deleteMarksheet(id).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Create Your Marksheet Here
          </h1>
          <label className="label">
            <span className="label-text">Marksheet Criteria</span>
          </label>
          <input
            className="mt-1 input input-bordered w-full"
            type="text"
            name="criteria"
            placeholder="Enter marksheet criteria..."
            value={inputs.criteria}
            onChange={handleChange}
            required
          />

          <label className="mt-4 label">
            <span className="label-text">Marks</span>
          </label>
          <textarea
            className="mt-1 input input-bordered w-full h-24"
            type="text"
            name="distribution"
            placeholder="Enter marks..."
            value={inputs.distribution}
            onChange={handleChange}
            required
          />

          <button
            className="mt-4 btn btn-active btn-primary w-full"
            onClick={MarkSheet}>
            SAVE
          </button>
          <br />
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
                  <th scope="col" class="px-6 py-3"></th>
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
                        {mark.distribution} <br />
                        <br />
                      </div>
                    ))}
                  </td>
                  <td class="px-6 py-1">
                    {marksheet.map((mark) => (
                      <div key={mark.id}>
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          <button onClick={() => DeleteMarksheet(mark._id)}>
                            Delete
                          </button>
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
