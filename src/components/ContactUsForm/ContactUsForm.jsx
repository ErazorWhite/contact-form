import React from 'react';
import css from './ContactUsForm.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Toast } from '../Toast/Toast.jsx';
import {ContactUsFormFields} from "../ContactUsFormFields/ContactUsFormFields.jsx";

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

const RadioOptions = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'support', label: 'Support Request' },
];

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
                {(formikProps) => (
                    <ContactUsFormFields isSubmitting={formikProps.isSubmitting} RadioOptions={RadioOptions}/>
                )}
            </Formik>
        </div>
    );
};
