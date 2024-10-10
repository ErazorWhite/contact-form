import { css } from './';
import { Formik } from 'formik';
import { ContactUsFormFields } from '../ContactUsFormFields';
import { contactUsFormValidationSchema } from '../../../utilities/validationSchemas.js';
import { notifyExternally } from '../../../utilities/notifications/index.js';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  queryType: '',
  message: '',
  acceptedTerms: false,
};

const handleSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    notifyExternally({
      headMessage: 'Message sent!',
      bodyMessage: 'Thanks for completing the form. We’ll be in touch soon!',
    });
    resetForm();
    setSubmitting(false);
  }, 750);
};

export const ContactUsForm = () => (
  <div className={css.formThumb}>
    <h1 className={css.textHeader}>Contact Us</h1>

    <Formik
      initialValues={initialValues}
      validationSchema={contactUsFormValidationSchema}
      onSubmit={handleSubmit}
      component={ContactUsFormFields}
    />
  </div>
);
