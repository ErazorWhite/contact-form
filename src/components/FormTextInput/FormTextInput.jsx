import { useField } from 'formik';
import React, { useId } from 'react';
import css from './FormTextInput.module.css';
import clsx from 'clsx';

export const FormTextInput = ({ label, required, isMultiLine, ...props }) => {
  const [field, meta] = useField(props);
  const [Component, className] = isMultiLine
    ? ['textarea', ['inputText', css.textArea]]
    : ['input', 'inputText'];
  const isTouchedError = meta.touched && meta.error;

  const id = useId();
  return (
    <div className={clsx(css.inputThumb, isMultiLine && css.textAreaMargin)}>
      <Component
        id={id}
        className={clsx(
          className,
          isTouchedError && css.inputError
        )}
        required={required}
        {...field}
      />

      <label className={'textLabel'} htmlFor={id}>
        {label}
      </label>

      {isTouchedError ? (
        <div className={clsx('error', css.errorOrder)}>{meta.error}</div>
      ) : null}
    </div>
  );
};
