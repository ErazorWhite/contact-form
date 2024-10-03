import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ContactUsForm } from './components/ContactUsForm/ContactUsForm.jsx';
import { NotificationProvider } from './components/Toaster/NotificationContext.jsx';
import { Toaster } from './components/Toaster/Toaster.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <NotificationProvider>
        <Toaster />
        <ContactUsForm />
      </NotificationProvider>
    </div>
  </StrictMode>
);
