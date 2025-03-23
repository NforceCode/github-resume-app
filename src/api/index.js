import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const getUser = (username) => api.get(`/users/${username}`);
