import React from 'react';
import { Form, Formik } from 'formik';
import css from './ContactUsForm.module.css';
import * as Yup from 'yup';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox.jsx';
import { FormTextInput } from '../FormTextInput/FormTextInput.jsx';
import { FormRadioGroup } from '../FormRadioGroup/FormRadioGroup.jsx';
import { FormTextArea } from '../FormTextArea/FormTextArea.jsx';

export const ContactUsForm = () => {
  return (
    <div className={css.formThumb}>
      <h1 className={css.textHeader}>Contact Us</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          queryType: '',
          message: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          queryType: Yup.string().required('Required'),
          message: Yup.string().required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <FormTextInput
            label="First Name"
            name="firstName"
            type="text"
          />

          <FormTextInput
            label="Last Name"
            name="lastName"
            type="text"
          />

          <FormTextInput
            label="Email"
            name="email"
            type="email"
          />

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

          <button className={css.submitButton} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
