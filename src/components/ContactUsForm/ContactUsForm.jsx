import React from 'react';
import { useFormik } from 'formik';
import css from './ContactUsForm.module.css';
import clsx from 'clsx';
import { IconChecked } from '../../assets/icons/IconChecked.jsx';
import { IconUnchecked } from '../../assets/icons/IconUnchecked.jsx';

export const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <h1 className={css.textHeader}>Contact Us</h1>

      <ul>
        <li className={css.inputItem}>
          <div className={css.labelThumb}>
            <label className={css.textLabel} htmlFor="firstName">
              First Name
            </label>
            <span>*</span>
          </div>

          <input
            className={css.inputText}
            id="firstName"
            name="firstName"
            type="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </li>
        <li className={css.inputItem}>
          <div className={css.labelThumb}>
            <label className={css.textLabel} htmlFor="lastName">
              Last Name
            </label>
            <span>*</span>
          </div>

          <input
            className={css.inputText}
            id="lastName"
            name="lastName"
            type="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </li>
        <li className={css.inputItem}>
          <div className={css.labelThumb}>
            <label className={css.textLabel} htmlFor="email">
              Email Address
            </label>
            <span>*</span>
          </div>

          <input
            className={css.inputText}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </li>
        <li className={css.inputItem}>
          <div className={css.labelThumb}>
            <label className={css.textLabel} htmlFor="email">
              Query Type
            </label>
            <span>*</span>
          </div>

          <ul>
            <li className={css.radioItem}>
              <div className={clsx(css.inputText, css.radioThumb)}>
                <input
                  className="visually-hidden"
                  type="radio"
                  id="general"
                  name="queryType"
                  value="general"
                />
                <IconUnchecked />
                <label htmlFor="general">General Enquiry</label>
              </div>
            </li>
            <li className={css.radioItem}>
              <div className={clsx(css.inputText, css.radioThumb)}>
                <input
                  className="visually-hidden"
                  type="radio"
                  id="support"
                  name="queryType"
                  value="support"
                />
                <IconUnchecked />
                <label htmlFor="support">Support Request</label>
              </div>
            </li>
          </ul>
        </li>

        <li className={css.inputItem}>
          <div className={css.labelThumb}>
            <label className={css.textLabel} htmlFor="message">
              Message
            </label>
            <span>*</span>
          </div>

          <textarea
            className={clsx(css.inputText, css.textArea)}
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </li>
      </ul>

      <div className={css.checkBoxThumb}>
        <input id="terms" type="checkbox" />
        <label className={css.textLabel} htmlFor="terms">
          I consent to being contacted by the team <span className={css.asteriskAccent}>*</span>
        </label>
      </div>

      <button className={css.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};
