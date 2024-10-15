// src/api/axiosConfig.ts
import axios, { AxiosResponse } from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "", // Set your base URL here
  timeout: 10000, // Timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Modify the response if needed, or simply return it
    return response;
  },
  (error) => {
    // Handle the response error
    if (error.response?.status === 401) {
      // For example, you can handle unauthorized access here
      console.log("Unauthorized access - redirect to login");
      window.location.href = "auth/login"; // or handle it programmatically
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
