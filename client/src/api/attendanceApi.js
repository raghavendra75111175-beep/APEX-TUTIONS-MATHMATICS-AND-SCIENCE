import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/attendance",
});

export const getAttendance = () => API.get("/");

export const addAttendance = (attendance) =>
  API.post("/", attendance);

export const updateAttendance = (id, attendance) =>
  API.put(`/${id}`, attendance);

export const deleteAttendance = (id) =>
  API.delete(`/${id}`);

export default API;