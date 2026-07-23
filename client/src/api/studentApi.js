import axios from "axios";

const API = axios.create({
  baseURL: "https://believable-peace-production-2fc3.up.railway.app/api",
});

export const getStudents = () => API.get("/");

export const addStudent = (student) => API.post("/", student);

export const updateStudent = (id, student) =>
  API.put(`/${id}`, student);

export const deleteStudent = (id) =>
  API.delete(`/${id}`);

export default API;