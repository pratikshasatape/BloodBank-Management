


// src/services/donorService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/donors'; // Adjust if needed

export const getAllDonors = () => axios.get(API_URL);
export const createDonor = (donor) => axios.post(API_URL, donor);
export const updateDonor = (id, donor) => axios.put(`${API_URL}/${id}`, donor);
export const deleteDonor = (id) => axios.delete(`${API_URL}/${id}`);

