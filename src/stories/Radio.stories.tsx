import { action } from '@storybook/addon-actions';
import React from 'react';
import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';

import { Radio } from '../components';

const initialValues = { gender: 'male' };

const validationSchema = yup.object().shape({
  gender: yup.string().oneOf(['male', 'female'], 'Error'),
});

export default {
  title: 'Radio',
  parameters: { actions: 'submit' },
};

export const RadioForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      action('submit')(values);
    }}
  >
    <Form>
      <Field component={Radio} name='gender' id='male'>
        Male
      </Field>
      <Field component={Radio} name='gender' id='female'>
        Female
      </Field>
      <Field component={Radio} name='gender' id='other'>
        Other
      </Field>
    </Form>
  </Formik>
);
