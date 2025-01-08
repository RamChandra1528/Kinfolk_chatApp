import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://kinfolk-gamma.vercel.app/api", // Replace with your API base URL
  withCredentials: true, // Ensure CORS and cookies work correctly
});

export { axiosInstance };
