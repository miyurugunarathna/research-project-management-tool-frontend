import jwtDecode from "jwt-decode";

export const getUserRole = () => {
  const decoded = jwtDecode(localStorage.getItem("token"));
  return decoded.role;
};

export const getUserId = () => {
  const decoded = jwtDecode(localStorage.getItem("token"));
  return decoded.id;
};
