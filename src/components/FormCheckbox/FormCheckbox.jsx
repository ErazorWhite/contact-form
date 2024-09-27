import { useField } from 'formik';
import css from './FormCheckbox.module.css';
import { IconCheckboxUnchecked } from '../icons/IconCheckBoxUnchecked.jsx';
import {IconCheckboxChecked} from "../icons/IconCheckboxChecked.jsx";

export const FormCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  console.log(field);
  console.log(props);
  return (
    <div className={css.checkboxThumb}>
      <div>
          <input
              className="visually-hidden"
              id={props.id}
              type="checkbox"
              {...field}
          />
          <label htmlFor={field.name} className={css.checkboxLabel}>
        <span className={css.checkboxMark}>
          {field.checked ? <IconCheckboxChecked/> : <IconCheckboxUnchecked />}
        </span>
              {children}
          </label>
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
      </div>
    </div>
  );
};

