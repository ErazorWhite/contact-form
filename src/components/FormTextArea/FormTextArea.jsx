import { useField } from 'formik';
import React from 'react';
import css from './FormTextArea.module.css';
import clsx from 'clsx';

export const FormTextArea = ({ children, required, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'textarea' });
  return (
    <div className={css.textAreaThumb}>
      <textarea
        className={clsx(
          css.textArea,
          meta.touched && meta.error && css.textAreaError
        )}
        required={required}
        {...field}
      />

      <label className={css.textLabel} htmlFor={props.id || props.name}>
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className={clsx('error', css.errorOrder)}>{meta.error}</div>
      ) : null}
    </div>
  );
};
