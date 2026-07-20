import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/dashboard",
});

export const getDashboard = () => API.get("/");

export default API;