import clsx from 'clsx';
import css from './FormRadioButton.module.css';
import { IconRadiobuttonChecked } from '../icons/IconRadiobuttonChecked.jsx';
import { IconRadiobuttonUnchecked } from '../icons/IconRadiobuttonUnchecked.jsx';
import React from 'react';

export const FormRadioButton = (props) => (
  <label
    htmlFor={props.option.value}
    className={clsx(
      css.inputText,
      css.radioThumb,
      props.checked && css.radioHighlight
    )}
  >
    <input
      type="radio"
      className="visually-hidden"
      id={props.option.value}
      name={props.field.name}
      value={props.option.value}
      onChange={props.field.onChange}
      onBlur={props.field.onBlur}
    />
    {props.checked ? <IconRadiobuttonChecked /> : <IconRadiobuttonUnchecked />}
    {props.option.label}
  </label>
);