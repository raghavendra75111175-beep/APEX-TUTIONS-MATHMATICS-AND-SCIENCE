import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/homework",
});

export const getHomework = () => API.get("/");

export const addHomework = (hw) => API.post("/", hw);

export const deleteHomework = (id) =>
  API.delete(`/${id}`);

export default API;