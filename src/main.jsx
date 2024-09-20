import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ContactUsForm } from './components/ContactUsForm/ContactUsForm.jsx';
import { Container } from './components/Container/Container.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <Container>
      <ContactUsForm />
    </Container>
  </StrictMode>
);
