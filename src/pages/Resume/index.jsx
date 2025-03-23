import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Resume from '../../components/Resume';
import { getUser } from '../../api';

function ResumePage() {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getUser(username)
      .then(({ data: user }) => {
        setUser(user);
      })
      .catch(({ response: { data: error } }) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [username]);

  const userNotFound = !user && !isLoading && error;

  return (
    <article>
      <h2>Resume</h2>
      <p>
        On this page you will see short information about the user you searched.
      </p>
      {user && <Resume user={user} />}
      {userNotFound && <p>No user with such username was found.</p>}
    </article>
  );
}

export default ResumePage;
