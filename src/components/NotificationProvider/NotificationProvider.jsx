import { useState, useCallback, useEffect, useMemo } from 'react';
import {
  NotificationContext,
  ToastContext,
  eventEmitter,
} from '../../utilities/notifications';
import { nanoid } from 'nanoid';

export const NotificationProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const notify = useCallback(
    ({ headMessage, bodyMessage, duration = 5000 }) => {
      const id = nanoid();
      setToasts((prev) =>
        prev.concat({ id, headMessage, bodyMessage, duration, visible: true })
      );
    },
    []
  );

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    eventEmitter.on('notify', notify);

    return () => {
      eventEmitter.off('notify', notify);
    };
  }, [notify]);

  const toastsValue = useMemo(
      () => ({ toasts, removeToast }),
      [toasts, removeToast]
  );

  return (
    <NotificationContext.Provider value={notify}>
      <ToastContext.Provider value={toastsValue}>
        {children}
      </ToastContext.Provider>
    </NotificationContext.Provider>
  );
};
