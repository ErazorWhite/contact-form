import { useField } from 'formik';
import React from 'react';
import css from './FormTextArea.module.css';
import clsx from "clsx";

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

      <textarea className={clsx(css.textArea, meta.touched && meta.error && css.textAreaError)} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
