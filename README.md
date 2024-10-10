# Contact form

Building accessible forms is a crucial task for front-end developers. 
This challenge helped me practice building a form with several input types and validation.

## Brief

This challenge was building out this contact form, which was made to look as close to the design as possible. Particular attention is paid to making this form accessible. Building accessible forms is a key skill for front-end developers, so this was a perfect challenge to practice.

The rule was that you could use any tools you liked to help you complete the challenge. So, if you have something you'd like to practice, feel free to give it a go.

## Features

#### Form Submission Success: 
- Complete the form and see a success toast message upon successful submission.
#### Form Validation Messages:
Receive validation messages if:
- A required field has been missed.
- The email address is not formatted correctly.
#### Keyboard Accessibility:
- Complete the form using only the keyboard.
#### Screen Reader Support:
- Inputs, error messages, and the success message are announced on screen readers.
#### Responsive Design:
- View the optimal layout of the interface depending on your device's screen size.
#### Interactive Elements:
- See hover and focus states for all interactive elements on the page.
#### Project Setup:
- Download the project and read the README.md file for further details and setup instructions.

## Installation

1.  Clone the repository
    ```sh
    git clone: https://github.com/ErazorWhite/contact-form
    ```
2.  Install dependencies
    ```sh
    npm install
    ```
3.  Launch the application
    ```sh
    npm run dev
    ```

## States

1.  When you first enter the page, you see a blank form.
Carefully executed styles and well-chosen color scheme makes the user happy.
When you hover the cursor over the input fields and button, their frames will be highlighted.
Green asterisks next to the field names indicate that they need to be filled in.

![](/docs/img/form_empty.png)

2. As soon as the user touches any of the fields the validation of the touched field starts working.
   If the user enters incorrect data or leaves the field with an asterisk empty, the validator will highlight the input field with a red frame and add an informative description of the error.

![](/docs/img/form_validation.png)

3. Once the user enters all the required details and clicks Submit, then he will see a custom pop-up notification that will inform them that the message has been sent.

![](/docs/img/form_submitted.png)

## Technologies Used

- **React**: An open-source JavaScript library for building user interfaces,
  primarily for single-page applications, where it is used for handling the view
  layer for web and mobile apps.
- **Vite**: A build tool that serves your code locally.
- **Formik**: the world's most popular open source form library for React and React Native.
- **CSS Modules**: Locally-scoped CSS for components.
- **PostCSS**: A tool for transforming CSS with JavaScript
  And others ...

## Designed by

[Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj)

## Implemented by

[Oleksii Husak](https://www.linkedin.com/in/oleksii-husak/)

## Special thanks to

[Alex Fitiskin](https://github.com/afitiskin),
[kpogodin](https://github.com/kpogodin),
[Aleksei Lazev](https://github.com/NotAleksei)
