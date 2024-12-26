import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const login = async (credentials) => {
  return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

export const fetchItems = async () => {
  return axios.get(`${API_BASE_URL}/items`);
};

export const createItem = async (item) => {
  return axios.post(`${API_BASE_URL}/items`, item);
};

export const deleteItem = async (id) => {
  return axios.delete(`${API_BASE_URL}/items/${id}`);
};
