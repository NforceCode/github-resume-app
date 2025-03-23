import React, { useEffect } from 'react';
import { getUserRepos } from '../../api';
import RepoList from '../RepoList';

function RepoInfo({ user }) {
  const [repos, setRepos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setIsLoading(true);

    getUserRepos(user.login)
      .then(({ data: repos }) => {
        setRepos(repos);
        setError(null);
      })
      .catch(({ response: { data: error } }) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  return (
    <section>
      <h3>Data about public repos</h3>
      {error ? (
        <p>unable to load public repos</p>
      ) : (
        <section>
          <h4>Last edited repos</h4>
          {repos && !isLoading && <RepoList repos={repos} />}
        </section>
      )}
    </section>
  );
}

export default RepoInfo;
