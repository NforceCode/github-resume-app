import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router';

const initialValues = {
  username: '',
};

function SearchForm() {
  const navigate = useNavigate();

  const handleSubmit = async ({ username }) => {
    navigate(username);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          <span>Enter Github username to search</span>
          <Field name="username" autoComplete="username" />
        </label>
        <button type="submit">Find user</button>
      </Form>
    </Formik>
  );
}

export default SearchForm;
