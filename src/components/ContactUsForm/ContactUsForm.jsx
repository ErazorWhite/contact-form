import React from 'react';
import { Form, Formik } from 'formik';
import css from './ContactUsForm.module.css';
import * as Yup from 'yup';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox.jsx';
import { FormTextInput } from '../FormTextInput/FormTextInput.jsx';
import { FormRadioGroup } from '../FormRadioGroup/FormRadioGroup.jsx';
import { FormTextArea } from '../FormTextArea/FormTextArea.jsx';
import toast from 'react-hot-toast';
import { Toast } from '../Toast/Toast.jsx';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    acceptedTerms: false,
};

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
    queryType: Yup.string().required('Please select a query type'),
    message: Yup.string().required('This field is required'),
    acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf(
            [true],
            'To submit this form, please consent to being contacted'
        ),
})

const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        setSubmitting(false);
        toast.custom((t) => <Toast t={t} />, { duration: 4000 });
    }, 400);
};

export const ContactUsForm = () => {

    return (
    <div className={css.formThumb}>
      <h1 className={css.textHeader}>Contact Us</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={css.textInputThumb}>
              <FormTextInput label="First Name" name="firstName" type="text" />
              <FormTextInput label="Last Name" name="lastName" type="text" />
            </div>

            <FormTextInput label="Email" name="email" type="email" />

            <FormRadioGroup
              groupName="Query Type"
              name="queryType"
              options={[
                { value: 'general', label: 'General Enquiry' },
                { value: 'support', label: 'Support Request' },
              ]}
            />

            <FormTextArea id="message" name="message">
              Message
            </FormTextArea>

            <FormCheckbox id="acceptedTerms" name="acceptedTerms">
              I consent to being contacted by the team *
            </FormCheckbox>

            <button
              className={css.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
