import { Form } from 'formik';
import css from './ContactUsFormFields.module.css';
import { FormTextInput } from '../FormTextInput/FormTextInput.jsx';
import { FormRadioGroup } from '../FormRadioGroup/FormRadioGroup.jsx';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox.jsx';

export const ContactUsFormFields = ({ isSubmitting, RadioOptions }) => {

    return (
      <Form>
          <div className={css.textInputThumb}>
              <FormTextInput label="First Name" name="firstName" type="text" required/>
              <FormTextInput label="Last Name" name="lastName" type="text" required/>
          </div>

          <FormTextInput label="Email address" name="email" type="email" required/>

          <FormRadioGroup groupName="Query Type" name="queryType" options={RadioOptions} required/>

          <FormTextInput label="Message" id="message" name="message" required isTextArea/>

          <FormCheckbox label="I consent to being contacted by the team" id="acceptedTerms" name="acceptedTerms"
                        required/>

          <button className={css.submitButton} type="submit" disabled={isSubmitting}>
              Submit
          </button>

      </Form>
  );
};