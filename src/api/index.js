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

export const getPublicReposLanguages = async (user) => {
  const allPublicReposRequests = new Array(Math.ceil(user.public_repos / 100))
    .fill(null)
    .map((_, index) =>
      getUserRepos(user.login, {
        per_page: 100,
        page: index + 1,
      })
    );

  return await Promise.all(allPublicReposRequests).then((responses) =>
    responses.flat(1)
  );
};
