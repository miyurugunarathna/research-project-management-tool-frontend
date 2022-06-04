import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

const apiInstance = axios.create({
  baseURL: "INVALID_URL",
});

apiInstance.interceptors.request.use(
  async function (config) {
    config.baseURL = url || "http://localhost:5000";
    if (localStorage.getItem("token")) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default apiInstance;
