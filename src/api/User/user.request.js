import apiInstance from "../apiInstance";

const getAllUsers = () => {
  return apiInstance
    .get(`/api/user/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getOneUser = (userID) => {
  return apiInstance
    .get(`/api/user/${userID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const userRequest = {
  getAllUsers,
  getOneUser,
};

export default userRequest;
