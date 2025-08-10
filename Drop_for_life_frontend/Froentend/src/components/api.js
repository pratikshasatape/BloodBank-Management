import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // Update if different
});

export default API;
