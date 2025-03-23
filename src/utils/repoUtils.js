/**
 * Reduces an array of repositories into an object with language names as keys and
 * their respective counts as values.
 * @param {Array} repos - An array of repository objects from the GitHub API.
 * @returns {Object} An object with language names as keys and their counts as values.
 */
export const reduceRepoLanguages = (repos) =>
  repos.reduce((acc, repo) => {
    const language = repo.language ? repo.language : 'Unknown';
    acc[language] = acc[language] ? (acc[language] += 1) : 1;
    return acc;
  }, {});

/**
 * Calculate the percentage of each programming language in the given languagesData.
 * @param {Object} languageData - An object with language names as keys and their respective counts as values.
 * @returns {Object} An object with the same keys as languageData, but with the values being the percentage of each language that are sorted in descending order.
 */
export const calcRepoLanguagePercentages = (languageData) => {
  const languageDataEntries = Object.entries(languageData).sort(
    (a, b) => b[1] - a[1]
  );
  const total = languageDataEntries.reduce((acc, [, val]) => acc + val, 0);

  const percentages = languageDataEntries.reduce((acc, [lang]) => {
    acc[lang] = ((languageData[lang] / total) * 100).toFixed(0);
    return acc;
  }, {});

  return percentages;
};
