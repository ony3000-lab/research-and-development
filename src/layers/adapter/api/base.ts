import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
  },
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     // eslint-disable-next-line no-param-reassign
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
