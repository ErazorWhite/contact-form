import { useField } from 'formik';
import React from 'react';
import css from './FormTextArea.module.css';

export const FormTextArea = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'textarea' });
  return (
    <div className={css.textAreaThumb}>
      <div className={css.labelThumb}>
        <label className={css.textLabel} htmlFor={props.id || props.name}>
          {children}
        </label>
        <span>*</span>
      </div>

      <textarea className={css.textArea} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
