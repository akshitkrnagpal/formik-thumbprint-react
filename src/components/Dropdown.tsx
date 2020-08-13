import React from 'react';
import { getIn } from 'formik';
import { Dropdown, Label, FormNote } from '@thumbtack/thumbprint-react';

export default ({
  label,
  isDisabled,
  field: { onChange: fieldOnChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldTouched },
  ...props
}) => {
  const { name, value } = field;
  const error = getIn(errors, name);
  const hasError = getIn(touched, name) && Boolean(error);

  const onChange = (value, event) => {
    setFieldTouched(field.name, true, false);
    setFieldValue(field.name, value);
    fieldOnChange(event);
  };

  return (
    <>
      {label && (
        <Label for={name} hasError={hasError}>
          {label}
        </Label>
      )}
      <Dropdown
        id={name}
        hasError={hasError}
        onChange={onChange}
        isDisabled={isDisabled ?? isSubmitting}
        value={value}
        {...field}
        {...props}
      >
        <option value='in'>India</option>
        <option value='us'>United States</option>
        <option value='uk'>United Kingdom</option>
      </Dropdown>
      {hasError && (
        <div style={{ paddingTop: 4 }}>
          <FormNote hasError={hasError}>{error}</FormNote>
        </div>
      )}
    </>
  );
};
