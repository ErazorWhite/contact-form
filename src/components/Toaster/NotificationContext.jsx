import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { nanoid } from 'nanoid';
import eventEmitter from '../../utilities/eventEmitter';

export const notifyExternally = (headMessage, bodyMessage, duration = 5000) => {
  eventEmitter.emit('notify', { headMessage, bodyMessage, duration });
};

const NotificationContext = createContext({});
export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const notify = useCallback((headMessage, bodyMessage, duration = 5000) => {
    const id = nanoid();
    setToasts((prev) =>
      prev.concat({ id, headMessage, bodyMessage, duration, visible: true })
    );
  }, []);

  useEffect(() => {
    const handleExternalNotify = ({ headMessage, bodyMessage, duration }) => {
      notify(headMessage, bodyMessage, duration);
    };

    eventEmitter.on('notify', handleExternalNotify);

    return () => {
      eventEmitter.off('notify', handleExternalNotify);
    };
  }, [notify]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(
    () => ({ notify, toasts, removeToast }),
    [notify, toasts, removeToast]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
