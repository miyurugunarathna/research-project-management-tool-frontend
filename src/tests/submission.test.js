import axios from "axios";
import submissionRequest from "../api/Submission/submission.request.js";

jest.mock("axios");

test("Add a Submission", () => {
  const submission = {
    type: "Project Proposal",
    description:
      "Please prepare all the related documents. Plagiarism is not allowed.",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: submission,
    },
  };
  axios.post.mockResolvedValue(response);
  return submissionRequest.addSubmission(submission).then((data) => {
    expect(data).toEqual(response);
  });
});

test("Fetch Submissions", () => {
  const submissions = [
    {
      type: "Viva",
      description: "It will be based on your project proposal",
    },
    {
      type: "Project Proposal",
      description:
        "Please prepare all the related documents. Plagiarism is not allowed.",
    },
    {
      type: "Registration",
      description: "Only four members per team are allowed",
    },
  ];
  const response = {
    data: {
      isSuccessful: true,
      responseData: submissions,
    },
  };
  axios.get.mockResolvedValue(response);
  return submissionRequest.getSubmissions().then((data) => {
    expect(data).toEqual(response);
  });
});

test("delete a submission", () => {
  const submission = {
    type: "Registration",
    description: "Only four members per team are allowed",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: submission,
    },
  };
  axios.delete.mockResolvedValue(response);
  return submissionRequest
    .deleteSubmission("629730adc67aa439695b613c")
    .then((data) => expect(data).toEqual(response));
});

test("update a submission", () => {
  const submission = {
    type: "Viva",
    description: "It will be based on your project proposal",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: submission,
    },
  };
  axios.put.mockResolvedValue(response);
  return submissionRequest
    .updateSubmission("62972fa7c67aa439695b5dc4", submission)
    .then((data) => expect(data).toEqual(response));
});

test("get one submission", () => {
  const submission = {
    type: "Project Proposal",
    description:
      "Please prepare all the related documents. Plagiarism is not allowed.",
  };
  const response = {
    data: {
      isSuccessful: true,
      responseData: submission,
    },
  };
  axios.get.mockResolvedValue(response);
  return submissionRequest
    .getOneSubmission("62973074c67aa439695b6131")
    .then((data) => expect(data).toEqual(response));
});
