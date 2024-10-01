import { useField } from 'formik';
import React from 'react';
import css from './FormTextInput.module.css';
import clsx from 'clsx';

export const FormTextInput = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={css.inputThumb}>
      <input
        className={clsx(
          css.inputText,
          meta.touched && meta.error && css.inputError
        )}
        {...field}
        required={required}
      />

      <label className={css.textLabel} htmlFor={props.id || props.name}>
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className={clsx('error', css.errorOrder)}>{meta.error}</div>
      ) : null}
    </div>
  );
};
