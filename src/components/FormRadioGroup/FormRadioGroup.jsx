import { useField } from 'formik';
import css from './FormRadioGroup.module.css';
import React from 'react';
import {FormRadioButton} from "../FormRadioButton/FormRadioButton.jsx";
import clsx from "clsx";

export const FormRadioGroup = ({ groupName, options, required, ...props }) => {
  const [field, meta] = useField({ ...props });

  return (
    <>
      <div className={css.labelThumb}>
        <div className={clsx(css.textLabel, required && css.required)}>{groupName}</div>
      </div>

      <ul className={css.radioList} role="group" aria-labelledby={props.name}>
        {options.map((option) => {
          const isChecked = field.value === option.value;
          return (
            <li key={option.value} className={css.radioItem}>
              <FormRadioButton option={option} checked={isChecked} field={field} />
            </li>
          );
        })}
      </ul>
      {meta.touched && meta.error ? (
        <div className={css.radioError}>{meta.error}</div>
      ) : null}
    </>
  );
};