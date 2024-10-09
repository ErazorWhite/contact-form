import { useField } from 'formik';
import { useId } from 'react';
import css from './FormTextInput.module.css';
import clsx from 'clsx';

export const FormTextInput = ({ label, required, isMultiLine, ...props }) => {
  const [field, meta] = useField(props);
  const [Component, className] = isMultiLine
    ? ['textarea', css.textArea]
    : ['input'];
  const isTouchedError = meta.touched && meta.error;

  const id = useId();
  return (
    <div className={clsx(css.inputThumb, isMultiLine && css.textAreaMargin)}>
      <div className={clsx(css.overFlowHidden, isMultiLine && css.hasTextArea)}>
        <Component
          id={id}
          className={clsx(
            'inputText',
            className,
            isTouchedError && css.inputError
          )}
          required={required}
          {...field}
          {...props}
        />
      </div>

      <label className={'textLabel'} htmlFor={id}>
        {label}
      </label>

      {isTouchedError ? (
        <div className={clsx('error', css.errorOrder)}>{meta.error}</div>
      ) : null}
    </div>
  );
};
