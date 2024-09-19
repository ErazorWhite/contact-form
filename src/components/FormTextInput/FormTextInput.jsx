import { useField } from 'formik';
import React from 'react';
import css from './FormTextInput.module.css';

export const FormTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={css.inputThumb}>
      <div className={css.labelThumb}>
        <label className={css.textLabel} htmlFor={props.id || props.name}>
          {label}
        </label>
        <span>*</span>
      </div>

      <input className={css.inputText} {...field} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
