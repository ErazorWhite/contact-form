import css from './ContactUsForm.module.css';
import { Formik } from 'formik';
import { ContactUsFormFields } from '../ContactUsFormFields/ContactUsFormFields.jsx';
import { contactUsFormValidationSchema } from '../../../utilities/validationSchemas.js';
import { notifyExternally } from '../../../utilities/notifications/index.js';
import PropTypes from "prop-types";

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
    notifyExternally(
      'Message sent!',
      'Thanks for completing the form. We’ll be in touch soon!'
    );
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
        component={ContactUsFormFields}
      />
    </div>
  );
};

ContactUsForm.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    queryType: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    acceptedTerms: PropTypes.bool.isRequired,
  }).isRequired,
  validationSchema: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  notifyExternally: PropTypes.func.isRequired,
};
