import React from 'react';
import { getIn } from 'formik';
import { TextInput, Label, FormNote } from '@thumbtack/thumbprint-react';

export default ({
  label,
  isDisabled,
  field: { onChange: fieldOnChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue },
  ...props
}) => {
  const { name } = field;
  const error = getIn(errors, name);
  const hasError = getIn(touched, name) && Boolean(error);

  const onChange = (value, event) => {
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
      <TextInput
        id={name}
        hasError={hasError}
        onChange={onChange}
        isDisabled={isDisabled ?? isSubmitting}
        {...field}
        {...props}
      />
      {hasError && (
        <div style={{ paddingTop: 4 }}>
          <FormNote hasError={hasError}>{error}</FormNote>
        </div>
      )}
    </>
  );
};
