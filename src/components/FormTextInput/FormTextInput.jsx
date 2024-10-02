import { useField } from 'formik';
import React, { useId } from 'react';
import css from './FormTextInput.module.css';
import clsx from 'clsx';

export const FormTextInput = ({ label, required, isMultiLine, ...props }) => {
  const [field, meta] = useField(props);
  const [Component, className] = isMultiLine
    ? ['textarea', css.textArea]
    : ['input', ['inputText', css.inputTextOrder]];

  const id = useId();
  return (
    <div className={clsx(css.inputThumb, isMultiLine && css.textAreaMargin)}>
      <Component
        id={id}
        className={clsx(
          className,
          meta.touched && meta.error && css.inputError
        )}
        required={required}
        {...field}
      />

      <label className={'textLabel'} htmlFor={id}>
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className={clsx('error', css.errorOrder)}>{meta.error}</div>
      ) : null}
    </div>
  );
};
