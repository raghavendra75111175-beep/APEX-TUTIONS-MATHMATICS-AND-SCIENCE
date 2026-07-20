import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/results",
});

export const getResults = () => API.get("/");

export const addResult = (data) =>
  API.post("/", data);

export const updateResult = (id, data) =>
  API.put(`/${id}`, data);

export const deleteResult = (id) =>
  API.delete(`/${id}`);

export default API;