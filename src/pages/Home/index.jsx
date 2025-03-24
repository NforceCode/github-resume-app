import React from 'react';
import SearchForm from '../../components/SearchForm';
import styles from './style.module.scss';

function HomePage() {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Search for a github user</h2>
      <p>
        Please note that we are unble to search for Enterprise Managed users at
        this time. If you attempt such search you will be told that the user
        does not exist.
      </p>
      <SearchForm />
    </article>
  );
}

export default HomePage;
