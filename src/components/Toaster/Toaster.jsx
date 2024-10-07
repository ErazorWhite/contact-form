import { Toast } from './Toast';
import css from './Toaster.module.css';
import { useNotifications } from '../../utilities/notifications';

export const Toaster = () => {
  const { toasts, removeToast } = useNotifications();

  return (
    <div className={css.toasterContainer}>
      {toasts.map(({headMessage, bodyMessage, duration, id}) => (
        <Toast
          key={id}
          id={id}
          headMessage={headMessage}
          bodyMessage={bodyMessage}
          duration={duration}
          onClose={removeToast}
        />
      ))}
    </div>
  );
};
