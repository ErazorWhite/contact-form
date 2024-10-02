import { useField } from 'formik';
import css from './FormRadioGroup.module.css';
import React from 'react';
import { FormRadioButton } from '../FormRadioButton/FormRadioButton.jsx';
import clsx from 'clsx';

export const FormRadioGroup = ({ groupName, options, required, ...props }) => {
  const [field, meta] = useField({ ...props });

  return (
    <>
      <legend className={clsx('textLabel', required && css.required)}>
        {groupName}
      </legend>
      <ul className={css.radioList} role="group" aria-labelledby={props.name}>
        {options.map((option) => (
          <li key={option.value} className={css.radioItem}>
            <FormRadioButton
              option={option}
              field={field}
              checked={field.value === option.value}
              required={required}
            />
          </li>
        ))}
      </ul>
      {meta.touched && meta.error ? (
        <div className={css.radioError}>{meta.error}</div>
      ) : null}
    </>
  );
};
