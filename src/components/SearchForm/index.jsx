import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router';
import styles from './style.module.scss';

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
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.labelText}>
            Enter Github username to search
          </span>
          <Field
            name="username"
            autoComplete="username"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.submitBtn}>Find user</button>
      </Form>
    </Formik>
  );
}

export default SearchForm;
