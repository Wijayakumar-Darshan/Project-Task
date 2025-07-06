import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  if (
    config.url === "https://dummyjson.com/auth/login" &&
    config.method === "post"
  ) {
    config.data = {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30,
    };
  }
  return config;
});

export default axiosInstance;
