import { useField } from 'formik';
import css from './FormRadioGroup.module.css';
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
