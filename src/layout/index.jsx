import React from 'react';
import { Outlet, Link } from 'react-router';
import classNames from 'classnames';
import styles from './style.module.scss';

function BasicLayout() {
  return (
    <>
      <header className={styles.header}>
        <div className={classNames(styles.headerContainer, styles.container)}>
          <h1>Github Resume App</h1>
          <Link to="/" className={styles.headerLink}>To search</Link>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>All rights reserved &copy; 2025</p>
        </div>
      </footer>
    </>
  );
}

export default BasicLayout;
