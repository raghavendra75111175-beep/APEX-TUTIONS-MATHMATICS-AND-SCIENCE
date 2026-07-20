import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/students",
});

export const getStudents = () => API.get("/");

export const addStudent = (student) => API.post("/", student);

export const updateStudent = (id, student) =>
  API.put(`/${id}`, student);

export const deleteStudent = (id) =>
  API.delete(`/${id}`);

export default API;