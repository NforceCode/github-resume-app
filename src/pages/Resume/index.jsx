import React from 'react';
import { useParams } from 'react-router';
import Resume from '../../components/Resume';
import { getUser } from '../../api';
import styles from './style.module.scss';
import { useLoadData } from '../../hooks';

function ResumePage() {
  const { username } = useParams();

  const { data: user, isLoading, error } = useLoadData(() => getUser(username));

  const userNotFound = !user && !isLoading && error;

  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Resume</h2>
      <p>
        On this page you will see short information about the user you searched.
      </p>
      {user && <Resume user={user} />}
      {userNotFound && (
        <p className={styles.errorMessage}>
          No user with such username was found.
        </p>
      )}
    </article>
  );
}

export default ResumePage;
