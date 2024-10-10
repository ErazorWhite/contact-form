import * as Yup from 'yup';

export const contactUsFormValidationSchema = Yup.object({
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
    .oneOf([true], 'To submit this form, please consent to being contacted'),
});
