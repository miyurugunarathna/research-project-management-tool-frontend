import apiInstance from "../apiInstance";

const getStudentGroups = () => {
  return apiInstance
    .get(`/api/student-group/`)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const getOneStudentGroup = (groupID) => {
  return apiInstance
    .get(`/api/groups/${groupID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const addStudentGroup = (group) => {
  return apiInstance
    .post(`/api/groups/`, group)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const updateStudentGroup = (groupID, group) => {
  return apiInstance
    .put(`/api/groups/${groupID}`, group)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const deleteStudentGroup = (groupId) => {
  return apiInstance
    .delete(`/api/groups/${groupId}`)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const groupRequest = {
  getStudentGroups,
  getOneStudentGroup,
  addStudentGroup,
  updateStudentGroup,
  deleteStudentGroup,
};

export default groupRequest;
