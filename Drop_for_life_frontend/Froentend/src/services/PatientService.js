import axios from 'axios';
const API_URL = 'http://localhost:8080/api/patients';

export const getAllPatients = () => axios.get(API_URL);
export const createPatient = (patient) => axios.post(API_URL, patient);
export const updatePatient = (id, patient) => axios.put(`${API_URL}/${id}`, patient);
export const deletePatient = (id) => axios.delete(`${API_URL}/${id}`);
