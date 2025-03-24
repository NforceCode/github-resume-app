import React, { useEffect } from 'react';
import { getUserRepos } from '../../api';
import UsedLangSection from '../UsedLangSection';
import RepoList from '../RepoList';
import styles from './style.module.scss';

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
    <section className={styles.container}>
      <h3 className={styles.heading}>Data about public repos</h3>
      <UsedLangSection user={user} />
      {error ? (
        <p className={styles.errorMessage}>unable to load public repos</p>
      ) : (
        <section className={styles.container}>
          <h4 className={styles.subheading}>Last edited repos</h4>
          {repos && !isLoading && <RepoList repos={repos} />}
        </section>
      )}
    </section>
  );
}

export default RepoInfo;
