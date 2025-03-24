import React, { useEffect, useState } from 'react';
import {
  calcRepoLanguagePercentages,
  reduceRepoLanguages,
} from '../../utils/repoUtils';
import { getPublicReposLanguages } from '../../api';
import styles from './style.module.scss';

function UsedLangSection({ user }) {
  const [languagePercentages, setLanguagePercentages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading;
    getPublicReposLanguages(user)
      .then((axiosResponses) => {
        const responses = axiosResponses
          .map((response) => response.data)
          .flat(1);

        const primaryRepoLanguages = reduceRepoLanguages(responses);

        const percentages = calcRepoLanguagePercentages(primaryRepoLanguages);

        setLanguagePercentages(percentages);
      })
      .catch(({ response: { data: error } }) => setError(error))
      .finally(() => setIsLoading(false));
  }, [user]);

  const percentagesEntries = Object.entries(languagePercentages);

  return (
    <section className={styles.container}>
      <h4 className={styles.subheading}>Language usage in repos</h4>
      {isLoading && <p>Loading...</p>}
      {percentagesEntries.length > 0 && (
        <ul className={styles.langList}>
          {percentagesEntries.map(([lang, percentage]) => (
            <li key={lang} className={styles.langListItem}>
              {lang}: {percentage}%
            </li>
          ))}
        </ul>
      )}
      {error && <p className={styles.errorMessage}>Cant display language usage at the moment</p>}
    </section>
  );
}

export default UsedLangSection;
