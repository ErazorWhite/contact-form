import { useField } from 'formik';
import css from './FormRadioGroup.module.css';
import clsx from 'clsx';
import React from 'react';
import { IconRadiobuttonUnchecked } from '../icons/IconRadiobuttonUnchecked.jsx';
import { IconRadiobuttonChecked } from '../icons/IconRadiobuttonChecked.jsx';

export const FormRadioGroup = ({ groupName, options, ...props }) => {
  const [field, meta] = useField({ ...props });

  return (
    <>
      <div className={css.labelThumb}>
        <div className={css.textLabel}>{groupName}</div>
        <span>*</span>
      </div>

      <ul className={css.radioList} role="group" aria-labelledby={props.name}>
        {options.map((option) => {
          const isChecked = field.value === option.value;
          return (
            <li key={option.value} className={css.radioItem}>
              <label
                htmlFor={option.value}
                className={clsx(css.inputText, css.radioThumb, isChecked && css.radioHighlight)}
              >
                <input
                  type="radio"
                  className="visually-hidden"
                  id={option.value}
                  name={field.name}
                  value={option.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
                {isChecked ? (
                  <IconRadiobuttonChecked />
                ) : (
                  <IconRadiobuttonUnchecked />
                )}
                {option.label}
              </label>
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
