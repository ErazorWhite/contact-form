import React, {useEffect, useState} from 'react';
import { Toast } from './Toast';
import css from './Toaster.module.css';
import {nanoid} from "nanoid";

let notifyHandlers = [];

export const notify = (message, type = 'info', duration = 5000) => {
  notifyHandlers.forEach((handler) => handler({ message, type, duration }));
};

export const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = (toast) => {
      const id = nanoid();
      setToasts((prev) => [...prev, { id, ...toast, visible: true }]);

      setTimeout(() => {
        setToasts((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, visible: false } : t
            )
        );
      }, toast.duration - 500);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, toast.duration);
    };

    notifyHandlers.push(addToast);

    return () => {
      notifyHandlers = notifyHandlers.filter((handler) => handler !== addToast);
    };
  }, []);

  return (
      <div className={css.toasterContainer}>
        {toasts.map((toast) => (
            <Toast key={toast.id} t={toast}/>
        ))}
      </div>
  );
};