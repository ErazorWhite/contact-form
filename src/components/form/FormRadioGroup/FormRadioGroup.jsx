import { useField } from 'formik';
import css from './FormRadioGroup.module.css';
import { RadioButton } from '../../RadioButton/RadioButton.jsx';
import clsx from 'clsx';
import PropTypes from "prop-types";

export const FormRadioGroup = ({ groupName, options, required, name, ...props }) => {
  const [field, meta] = useField({ ...props });

  return (
    <>
      <legend className={clsx('textLabel', required && css.required)}>
        {groupName}
      </legend>
      <ul className={css.radioList} role="group" aria-labelledby={name}>
        {options.map((option) => (
          <li key={option.value} className={css.radioItem}>
            <RadioButton
              name={field.name}
              value={option.value}
              checked={field.value === option.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              required={required}
              label={option.label}
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

FormRadioGroup.propTypes = {
    groupName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    required: PropTypes.bool,
};
