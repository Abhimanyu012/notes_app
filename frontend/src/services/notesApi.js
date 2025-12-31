import axios from "axios";

const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

const api = axios.create({
  baseURL: `${baseUrl}/notes`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getNotes = () => api.get("/").then((res) => res.data);
export const getNote = (id) => api.get(`/${id}`).then((res) => res.data.Note || res.data);
export const createNote = (payload) => api.post("/", payload).then((res) => res.data.Note || res.data);
export const updateNote = (id, payload) => api.put(`/${id}`, payload).then((res) => res.data.Note || res.data);
export const deleteNote = (id) => api.delete(`/${id}`).then((res) => res.data);

export default api;
