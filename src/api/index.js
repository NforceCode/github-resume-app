import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const getUser = (username) => api.get(`/users/${username}`);

export const getUserRepos = (
  username,
  { per_page = 10, sort = 'updated', direction = 'desc', page = 1 } = {}
) =>
  api.get(`/users/${username}/repos`, {
    params: { per_page, sort, direction, page },
  });
