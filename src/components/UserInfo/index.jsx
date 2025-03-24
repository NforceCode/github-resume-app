import React from 'react';
import { format } from 'date-fns';
import styles from './style.module.scss';

function UserInfo({ user }) {
  return (
    <section className={styles.container}>
      <div className={styles.userInfo}>
        <img
          src={user.avatar_url}
          alt={user.name ? user.name : user.login}
          className={styles.userInfoPic}
        />
        <div className={styles.userInfoData}>
          <h3 className={styles.userName}>
            {user.name ? user.name : user.login}
          </h3>
          <p>{user.bio || 'No bio'}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <p>Number of public repos: {user.public_repos}</p>
        <p>Registration date: {format(user.created_at, 'dd.MM.yyyy')}</p>
      </div>
    </section>
  );
}

export default UserInfo;
