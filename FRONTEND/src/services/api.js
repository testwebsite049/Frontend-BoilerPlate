import axios from "axios";
// import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:9999/api", // Replace with your API URL
  withCredentials: true, // Include cookies in cross-origin requests
});

api.interceptors.request.use(
  (config) => {
    // const token = Cookies.get("authToken");
    // console.log("token ", token);
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
