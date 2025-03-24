import { format } from 'date-fns';
import React from 'react';
import styles from './style.module.scss';

function ListItem({ repo }) {
  return (
    <li className={styles.repoItem}>
      <div className={styles.repoNameContainer}>
        <h4 className={styles.repoItemName}>
          <a target="_blank" href={repo.html_url}>
            {repo.name}
          </a>
        </h4>
        <p>
          {format(repo.created_at, 'yyyy')} — {format(repo.pushed_at, 'yyyy')}
        </p>
      </div>
      <p>Primary repo language: {repo.language || 'Unknown'}</p>
      <p>{repo.description || 'No description'}</p>
    </li>
  );
}

export default ListItem;
