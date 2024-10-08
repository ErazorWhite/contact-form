import clsx from 'clsx';
import css from './RadioButton.module.css';
import { useId } from 'react';

export const RadioButton = ({
  name,
  value,
  checked,
  onChange,
  onBlur,
  required = false,
  label,
}) => {
  const id = useId();
  return (
    <>
      <input
        type="radio"
        className={clsx('visually-hidden', css.radioInput)}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
        required={required}
      />

      <label
        htmlFor={id}
        className={clsx('inputText', css.labelAction, css.radioThumb)}
      >
        {label}
      </label>
    </>
  );
};
