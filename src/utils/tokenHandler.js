import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("authToken", token, { secure: true, sameSite: "strict" });
};

export const getToken = () => Cookies.get("authToken");

export const removeToken = () => {
  Cookies.remove("authToken");
};
