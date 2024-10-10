import { useField } from 'formik';
import { useId } from 'react';
import { css } from './';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const FormTextInput = ({ label, required, isMultiLine, ...props }) => {
  const [field, meta] = useField(props);
  const [Component, className] = isMultiLine
    ? ['textarea', css.textArea]
    : ['input'];
  const isTouchedError = meta.touched && meta.error;

  const id = useId();
  return (
    <div className={clsx(css.inputThumb, isMultiLine && css.textAreaMargin)}>
      <Component
        id={id}
        className={clsx(
          'inputText',
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

FormTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  isMultiLine: PropTypes.bool,
};
