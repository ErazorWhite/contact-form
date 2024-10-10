import { useField } from 'formik';
import { css } from './';
import { IconCheckboxUnchecked } from '../../icons';
import { IconCheckboxChecked } from '../../icons';
import { useId } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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

FormCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
