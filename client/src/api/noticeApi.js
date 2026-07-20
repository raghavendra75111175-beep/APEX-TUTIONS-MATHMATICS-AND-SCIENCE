import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/notices",
});

export const getNotices = () => API.get("/");

export const addNotice = (data) => API.post("/", data);

export const updateNotice = (id, data) => API.put(`/${id}`, data);

export const deleteNotice = (id) => API.delete(`/${id}`);

export default API;