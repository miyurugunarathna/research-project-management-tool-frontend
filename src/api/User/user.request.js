import apiInstance from "../apiInstance";

const addUser = (user) => {
  return apiInstance
    .post(`/api/user/`, user)
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

const userRequest = {
  addUser,
  login,
  logout,
  authHeader,
};

export default userRequest;
