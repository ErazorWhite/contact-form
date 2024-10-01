import { useField } from 'formik';
import css from './FormCheckbox.module.css';
import { IconCheckboxUnchecked } from '../icons/IconCheckBoxUnchecked.jsx';
import { IconCheckboxChecked } from '../icons/IconCheckboxChecked.jsx';
import { useId } from 'react';
import clsx from "clsx";

export const FormCheckbox = ({ label, required, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const id = useId(); // Генерируем уникальный идентификатор

  return (
    <div className={css.checkboxThumb}>
      <input
        className={clsx('visually-hidden', css.checkboxInput)}
        id={id}
        type="checkbox"
        required={required}
        {...field}
      />

      <label htmlFor={id} className={css.checkboxLabel}>
        <span className={css.checkboxMark}>
          {field.checked ? <IconCheckboxChecked /> : <IconCheckboxUnchecked />}
        </span>
        <p className={css.checkboxText}>{label}</p>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
