import React from 'react';
import ListItem from './RepoItem';
import styles from './style.module.scss';

function RepoList({ repos }) {
  return (
    <ul className={styles.repoList}>
      {repos.map((repo) => (
        <ListItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
}

export default RepoList;
