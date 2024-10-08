import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:4000",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.data === "jwt expired") {
      window.location.reload();
    }
  },
);

export default axiosInstance;
