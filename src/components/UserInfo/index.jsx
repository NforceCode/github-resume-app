import React from 'react';
import { format } from 'date-fns';

function UserInfo({ user }) {
  return (
    <section>
      <div>
        <div>
          <h3>{user.name ? user.name : user.login}</h3>
          <p>{user.bio || 'No bio'}</p>
        </div>
        <img src={user.avatar_url} alt={user.name ? user.name : user.login} />
      </div>
      <div>
        <p>Number of public repos: {user.public_repos}</p>
        <p>Registration date: {format(user.created_at, 'dd.MM.yyyy')}</p>
      </div>
    </section>
  );
}

export default UserInfo;
