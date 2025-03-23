import { format } from 'date-fns';
import React from 'react';

function ListItem({ repo }) {
  return (
    <li>
      <h4>
        <a target="_blank" href={repo.html_url}>
          {repo.name}
        </a>
      </h4>
      <p>Primary repo language: {repo.language || 'Unknown'}</p>
      <p>{repo.description}</p>
      <p>
        {format(repo.created_at, 'yyyy')} — {format(repo.pushed_at, 'yyyy')}
      </p>
    </li>
  );
}

export default ListItem;
