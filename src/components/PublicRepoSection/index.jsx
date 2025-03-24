import React from 'react';
import { getUserRepos } from '../../api';
import RepoList from '../RepoList';
import styles from './style.module.scss';
import { useLoadData } from '../../hooks';

function PublicRepoSection({ user }) {
  const {
    data: repos,
    isLoading,
    error,
  } = useLoadData(() => getUserRepos(user.login));

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
