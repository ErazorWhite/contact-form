import React from 'react';
import css from './ContactUsForm.module.css';
import { Formik } from 'formik';
import { ContactUsFormFields } from '../ContactUsFormFields/ContactUsFormFields.jsx';
import { notify } from '../Toaster/Toaster.jsx';
import { contactUsFormValidationSchema } from '../../utilities/validationSchemas.js';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  queryType: '',
  message: '',
  acceptedTerms: false,
};

const RadioOptions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'support', label: 'Support Request' },
];

const handleSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    notify('Form submitted successfully!', 'success');
    resetForm();
    setSubmitting(false);
  }, 750);
};

export const ContactUsForm = () => {
  return (
    <div className={css.formThumb}>
      <h1 className={css.textHeader}>Contact Us</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={contactUsFormValidationSchema}
        onSubmit={handleSubmit}
        children={(props) => (
          <ContactUsFormFields RadioOptions={RadioOptions} {...props} />
        )}
      />
    </div>
  );
};
