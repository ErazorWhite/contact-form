import { Form } from 'formik';
import css from './ContactUsFormFields.module.css';
import { FormTextInput } from '../FormTextInput/FormTextInput.jsx';
import { FormRadioGroup } from '../FormRadioGroup/FormRadioGroup.jsx';
import { FormTextArea } from '../FormTextArea/FormTextArea.jsx';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox.jsx';

export const ContactUsFormFields = ({ isSubmitting }) => {
    return (
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
    );
};
