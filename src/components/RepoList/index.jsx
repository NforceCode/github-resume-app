import React from 'react';
import ListItem from './RepoItem';

function RepoList({ repos }) {
  return (
    <ul>
      {repos.map((repo) => (
        <ListItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
}

export default RepoList;
