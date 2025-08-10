// src/services/HospitalService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/hospitals';

export const getAllHospitals = () => axios.get(API_URL);
export const createHospital = (hospital) => axios.post(API_URL, hospital);
export const updateHospital = (id, hospital) => axios.put(`${API_URL}/${id}`, hospital);
export const deleteHospital = (id) => axios.delete(`${API_URL}/${id}`);
