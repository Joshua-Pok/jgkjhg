import axios from 'axios';
import { isLocalDevelopment } from '../utils/env';

const axiosInstance = axios.create({
  baseURL: "https://api-fms.data.ventitechnologies.net/deployment"
});

// Request interceptor for auth token
axiosInstance.interceptors.request.use((config) => {
  if (isLocalDevelopment) {
    const token = sessionStorage.getItem('devAuthToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosInstance;
