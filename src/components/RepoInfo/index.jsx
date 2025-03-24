import React  from 'react';
import UsedLangSection from '../UsedLangSection';
import styles from './style.module.scss';
import PublicRepoSection from '../PublicRepoSection';

function RepoInfo({ user }) {
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Data about public repos</h3>
      <UsedLangSection user={user} />
      <PublicRepoSection user={user} />
    </section>
  );
}

export default RepoInfo;
