import apiInstance from "../apiInstance";

const getSubmissions = () => {
  return apiInstance
    .get(`/api/submission/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const addSubmission = (submission) => {
  return apiInstance
    .post(`/api/submission/`, submission)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getOneSubmission = (submissionID) => {
  return apiInstance
    .get(`/api/submission/${submissionID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const updateSubmission = (submission, submissionID) => {
  return apiInstance
    .put(`/api/submission/${submissionID}`, submission)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const deleteSubmission = (submissionID) => {
  return apiInstance
    .delete(`/api/submission/${submissionID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const submissionRequest = {
  getSubmissions,
  addSubmission,
  getOneSubmission,
  updateSubmission,
  deleteSubmission,
};
export default submissionRequest;
