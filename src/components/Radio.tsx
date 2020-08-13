import React from 'react';
import { getIn } from 'formik';
import { Radio } from '@thumbtack/thumbprint-react';

export default ({
  id,
  label,
  isDisabled,
  field: { onChange: fieldOnChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldTouched },
  ...props
}: any) => {
  const { name, value } = field;
  const error = getIn(errors, name);
  const hasError = getIn(touched, name) && Boolean(error);

  const onChange = () => {
    setFieldTouched(name, true, false);
    setFieldValue(name, id);
  };

  return (
    <Radio
      id={id}
      hasError={hasError && value === id}
      isChecked={value === id}
      onChange={onChange}
      isDisabled={isDisabled ?? isSubmitting}
      {...field}
      {...props}
    />
  );
};
