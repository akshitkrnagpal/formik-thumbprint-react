import { action } from '@storybook/addon-actions';
import React from 'react';
import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';

import { TextArea } from '../components';

const initialValues = { email: '' };

const validationSchema = yup.object().shape({
  about: yup.string().required().min(200).max(500),
});

export default {
  title: 'TextArea',
  parameters: { actions: 'submit' },
};

export const TextAreaForm = () => (
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
        component={TextArea}
        name='about'
        label='About'
        placeholder='Tell use about you'
      />
    </Form>
  </Formik>
);
