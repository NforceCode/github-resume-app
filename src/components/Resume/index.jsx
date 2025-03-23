import React from 'react';
import UserInfo from '../UserInfo';

function Resume({ user }) {
  return (
    <article>
      <h3>Resume for {user.name ? user.name : user.login}</h3>
      <UserInfo user={user} />
    </article>
  );
}

export default Resume;
