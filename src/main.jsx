import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ContactUsForm } from './components/ContactUsForm/ContactUsForm.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <div className="container">
      <ContactUsForm/>
    </div>
  </StrictMode>
);
