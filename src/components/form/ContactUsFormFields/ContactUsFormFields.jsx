import { Form } from 'formik';
import { css } from './';
import { FormTextInput } from '../FormTextInput';
import { FormRadioGroup } from '../FormRadioGroup';
import { FormCheckbox } from '../FormCheckbox';
import PropTypes from 'prop-types';

const RadioOptions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'support', label: 'Support Request' },
];

export const ContactUsFormFields = ({ isSubmitting }) => {
  return (
    <Form>
      <div className={css.textInputThumb}>
        <FormTextInput
          label="First Name"
          name="firstName"
          type="text"
          required
        />
        <FormTextInput label="Last Name" name="lastName" type="text" required />
      </div>

      <FormTextInput label="Email address" name="email" type="email" required />

      <FormRadioGroup
        groupName="Query Type"
        name="queryType"
        options={RadioOptions}
        required
      />

      <FormTextInput
        label="Message"
        id="message"
        name="message"
        required
        isMultiLine
      />

      <FormCheckbox
        label="I consent to being contacted by the team"
        id="acceptedTerms"
        name="acceptedTerms"
        required
      />

      <button
        className={css.submitButton}
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </Form>
  );
};

ContactUsFormFields.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
