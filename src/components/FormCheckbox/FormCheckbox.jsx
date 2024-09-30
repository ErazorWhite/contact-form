import { useField } from 'formik';
import css from './FormCheckbox.module.css';
import { IconCheckboxUnchecked } from '../icons/IconCheckBoxUnchecked.jsx';
import { IconCheckboxChecked } from '../icons/IconCheckboxChecked.jsx';
import { useId } from 'react';

export const FormCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const id = useId(); // Генерируем уникальный идентификатор

  return (
    <div className={css.checkboxThumb}>
      <input className="visually-hidden" id={id} type="checkbox" {...field} />
      <label htmlFor={id} className={css.checkboxLabel}>
        <span className={css.checkboxMark}>
          {field.checked ? <IconCheckboxChecked /> : <IconCheckboxUnchecked />}
        </span>
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
