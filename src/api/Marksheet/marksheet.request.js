import apiInstance from "../apiInstance";

const getMarksheets = () => {
  return apiInstance
    .get(`/api/marksheet`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const addMarksheet = (marksheet) => {
  return apiInstance
    .post(`/api/marksheet`, marksheet)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getOneMarksheet = (marksheetID) => {
  return apiInstance
    .get(`/api/marksheet/${marksheetID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const updateMarksheet = (marksheet, marksheetID) => {
  return apiInstance
    .put(`/api/marksheet/${marksheetID}`, marksheet)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const deleteMarksheet = (marksheetID) => {
  return apiInstance
    .delete(`/api/marksheet/${marksheetID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const markSheetRequest = {
  getMarksheets,
  addMarksheet,
  getOneMarksheet,
  updateMarksheet,
  deleteMarksheet,
};
export default markSheetRequest;
