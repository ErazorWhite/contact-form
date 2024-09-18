import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ContactUsForm } from './components/ContactUsForm/ContactUsForm.jsx';
import { Container } from './components/Container/Container.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <ContactUsForm />
    </Container>
  </StrictMode>
);
