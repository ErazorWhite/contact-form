import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ContactUsForm } from './components/form/ContactUsForm';
import { NotificationProvider } from './components/NotificationProvider/NotificationProvider.jsx';
import { Toaster } from './components/Toaster/';

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
