import axios from "axios";

const API = axios.create({
  baseURL: "https://secure-backend.onrender.com",
});

export const sendQuery = (data) => API.post("/query", data);
export const loginUser = (data) => API.post("/login", data);
export const getLogs = () => API.get("/logs");