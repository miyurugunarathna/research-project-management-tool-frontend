import axios from "axios";
import markSheetRequest from "../api/Marksheet/marksheet.request";

jest.mock("axios");

test("Add a Marksheets", () => {
  const marksheet = {
    criteria: "Coding",
    distribution: "15",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: marksheet,
    },
  };
  axios.post.mockResolvedValue(response);
  return markSheetRequest.addMarksheet(marksheet).then((data) => {
    expect(data).toEqual(response);
  });
});

test("Fetch Marksheets", () => {
  const marksheets = [
    {
      criteria: "Demo",
      distribution: "15",
    },
    {
      criteria: "Coding Standard",
      distribution: "20",
    },
    {
      criteria: "Frontend",
      distribution: "5",
    },
    {
      criteria: "Backend",
      distribution: "5",
    },
    {
      criteria: "Database",
      distribution: "3",
    },
  ];
  const response = {
    data: {
      isSuccessful: true,
      responseData: marksheets,
    },
  };
  axios.get.mockResolvedValue(response);
  return markSheetRequest.getMarksheets().then((data) => {
    expect(data).toEqual(response);
  });
});

test("delete a marksheet", () => {
  const marksheet = {
    criteria: "Database",
    distribution: "3",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: marksheet,
    },
  };
  axios.delete.mockResolvedValue(response);
  return markSheetRequest
    .deleteMarksheet("6295ad4adf98502e7667eb18")
    .then((data) => expect(data).toEqual(response));
});

test("update a marksheet", () => {
  const marksheet = {
    criteria: "Frontend",
    distribution: "10",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: marksheet,
    },
  };
  axios.put.mockResolvedValue(response);
  return markSheetRequest
    .updateMarksheet("6295ad37df98502e7667ead2", marksheet)
    .then((data) => expect(data).toEqual(response));
});

test("get one marksheet", () => {
  const marksheet = {
    criteria: "Backend",
    distribution: "5",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: marksheet,
    },
  };
  axios.get.mockResolvedValue(response);
  return markSheetRequest
    .getOneMarksheet("6295ad3fdf98502e7667eaef")
    .then((data) => expect(data).toEqual(response));
});
