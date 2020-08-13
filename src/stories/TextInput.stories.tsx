import { action } from '@storybook/addon-actions';
import React from 'react';
import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';

import { TextInput } from '../components';

const initialValues = { email: '' };

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
});

export default {
  title: 'TextInput',
  parameters: { actions: 'submit' },
};

export const TextInputForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      action('submit')(values);
    }}
  >
    <Form>
      <Field
        component={TextInput}
        name='email'
        label='Email'
        placeholder='Enter your email'
      />
    </Form>
  </Formik>
);
