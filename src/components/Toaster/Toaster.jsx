import React from 'react';
import { Toast } from './Toast';
import css from './Toaster.module.css';
import { useNotifications } from './NotificationContext';

export const Toaster = () => {
  const { toasts, removeToast } = useNotifications();

  return (
    <div className={css.toasterContainer}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          headMessage={toast.headMessage}
          bodyMessage={toast.bodyMessage}
          toast={toast}
          onClose={removeToast}
        />
      ))}
    </div>
  );
};
