import { Toast } from './';
import { css } from './';
import { useToasts } from '../../utilities/notifications';

export const Toaster = () => {
  const { toasts, removeToast } = useToasts();

  return (
    <div className={css.toasterContainer}>
      {toasts.map(({ headMessage, bodyMessage, duration, id }) => (
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
