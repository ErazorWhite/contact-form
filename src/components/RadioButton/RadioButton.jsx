import clsx from 'clsx';
import css from './RadioButton.module.css';
import { useId } from 'react';
import PropTypes from "prop-types";

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

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    required: PropTypes.bool,
    label: PropTypes.string.isRequired,
};
