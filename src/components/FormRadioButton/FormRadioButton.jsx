import clsx from 'clsx';
import css from './FormRadioButton.module.css';
import React, { useId } from 'react';

export const FormRadioButton = (props) => {
  const id = useId();
  return (
    <>
      <input
        type="radio"
        className={clsx('visually-hidden', css.radioInput)}
        id={id}
        name={props.field.name}
        value={props.option.value}
        onChange={props.field.onChange}
        onBlur={props.field.onBlur}
        checked={props.field.value === props.option.value}
        required={props.required}
      />

      <label htmlFor={id} className={clsx(css.inputText, css.radioThumb)}>
        <span className={css.customRadioButton} />
        {props.option.label}
      </label>
    </>
  );
};
