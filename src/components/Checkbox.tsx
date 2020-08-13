import React from 'react';
import { getIn } from 'formik';
import { Checkbox } from '@thumbtack/thumbprint-react';

export default ({
  isDisabled,
  field: { onChange: fieldOnChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldTouched },
  ...props
}) => {
  const { name, value } = field;
  console.log(name, value, errors, touched);
  const error = getIn(errors, name);
  const hasError = getIn(touched, name) && Boolean(error);

  const onChange = (value, event) => {
    setFieldTouched(name, true, false);
    setFieldValue(name, value);
    fieldOnChange(event);
  };

  return (
    <Checkbox
      id={name}
      hasError={hasError}
      isChecked={value}
      onChange={onChange}
      isDisabled={isDisabled ?? isSubmitting}
      {...field}
      {...props}
    />
  );
};
