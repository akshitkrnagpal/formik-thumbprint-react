import { action } from '@storybook/addon-actions';
import React from 'react';
import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';

import { Checkbox } from '../components';

const initialValues = { agree: false };

const validationSchema = yup.object().shape({
  agree: yup.boolean().oneOf([true], 'Error'),
});

export default {
  title: 'Checkbox',
  parameters: { actions: 'submit' },
};

export const CheckboxForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      action('submit')(values);
    }}
  >
    <Form>
      <Field type='checkbox' component={Checkbox} name='agree'>
        I agree to Terms and Conditions
      </Field>
    </Form>
  </Formik>
);
