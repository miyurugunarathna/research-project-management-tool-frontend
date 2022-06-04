import apiInstance from "../apiInstance";

const addUser = (user) => {
  return apiInstance.post(`/api/user/`, user);
};
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

const login = (loginCredentials) => {
  return apiInstance
    .post(`api/user/login`, loginCredentials)
    .then((response) => {
      if (response.data.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.data.token));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return { Authorization: token };
  }
  return {};
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
  addUser,
  login,
  logout,
  authHeader,
};

export default userRequest;
