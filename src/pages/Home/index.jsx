import React from 'react';
import SearchForm from '../../components/SearchForm';

function HomePage() {
  return (
    <article>
      <h2>Search for a github user</h2>
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
