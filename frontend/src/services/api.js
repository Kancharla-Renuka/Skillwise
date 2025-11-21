import axios from 'axios';
import API_BASE_URL from '../config/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = (params = {}) => {
  return api.get('/products', { params });
};

export const searchProducts = (name) => {
  return api.get('/products/search', { params: { name } });
};

export const getCategories = () => {
  return api.get('/products/categories');
};

export const getProduct = (id) => {
  return api.get(`/products/${id}`);
};

export const createProduct = (product) => {
  return api.post('/products', product);
};

export const updateProduct = (id, product) => {
  return api.put(`/products/${id}`, product);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};

export const getProductHistory = (id) => {
  return api.get(`/products/${id}/history`);
};

export const importProducts = (file) => {
  const formData = new FormData();
  formData.append('csvFile', file);
  return api.post('/products/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const exportProducts = () => {
  return api.get('/products/export', {
    responseType: 'blob',
  });
};

