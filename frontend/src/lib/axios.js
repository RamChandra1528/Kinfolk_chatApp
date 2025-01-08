import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://kinfolk-gamma.vercel.app/api" : "/api",
  withCredentials: true,
});
