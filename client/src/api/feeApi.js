import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/fees",
});

export const getFees = () => API.get("/");

export const addFee = (fee) => API.post("/", fee);

export const updateFee = (id, fee) =>
  API.put(`/${id}`, fee);

export const deleteFee = (id) =>
  API.delete(`/${id}`);

export default API;