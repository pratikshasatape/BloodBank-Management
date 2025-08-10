// src/services/authService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth"; // adjust to your Spring Boot backend

const login = (email, password) => {
  return axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });
};

const authService = {
  login,
};

export default authService;
