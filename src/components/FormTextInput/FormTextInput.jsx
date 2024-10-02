import { useField } from 'formik';
import React, { useId } from 'react';
import css from './FormTextInput.module.css';
import clsx from 'clsx';

export const FormTextInput = ({ label, required, isTextArea, ...props }) => {
  const [field, meta] = useField(props);
  const id = useId();
  return (
    <div className={clsx(css.inputThumb, isTextArea && css.textAreaMargin )}>
      {isTextArea ? (
        <textarea
          id={id}
          className={clsx(
            css.textArea,
            meta.touched && meta.error && css.inputError
          )}
          required={required}
          {...field}
        />
      ) : (
        <input
          id={id}
          className={clsx(
            css.inputText,
            meta.touched && meta.error && css.inputError
          )}
          {...field}
          required={required}
        />
      )}
      <label className={css.textLabel} htmlFor={id}>
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className={clsx('error', css.errorOrder)}>{meta.error}</div>
      ) : null}
    </div>
  );
};