import React, { useEffect, useState } from 'react';
import { getUserRepos } from '../../api';
import RepoList from '../RepoList';
import styles from './style.module.scss';

function PublicRepoSection({ user }) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <section className={styles.container}>
      <h4 className={styles.subheading}>Last edited repos</h4>
      {error && !isLoading && (
        <p className={styles.errorMessage}>unable to load public repos</p>
      )}
      {repos && !isLoading && <RepoList repos={repos} />}
    </section>
  );
}

export default PublicRepoSection;
