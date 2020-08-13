import { action } from '@storybook/addon-actions';
import React from 'react';
import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';

import { Dropdown } from '../components';

const initialValues = { country: 'in' };

const validationSchema = yup.object().shape({
  country: yup.string().oneOf(['in'], 'Must be India'),
});

export default {
  title: 'Dropdown',
  parameters: { actions: 'submit' },
};

export const DropdownForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      action('submit')(values);
    }}
  >
    <Form>
      <Field component={Dropdown} name='country' label='Select Country' />
    </Form>
  </Formik>
);
