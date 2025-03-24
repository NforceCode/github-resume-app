import React from 'react';
import UserInfo from '../UserInfo';
import RepoInfo from '../RepoInfo';
import styles from './style.module.scss';

function Resume({ user }) {
  return (
    <article className={styles.container}>
      <h3 className={styles.heading}>
        Resume for {user.name ? user.name : user.login}
      </h3>
      <UserInfo user={user} />
      <RepoInfo user={user} />
    </article>
  );
}

export default Resume;
