import { useEffect, useState } from 'react';
import { IconCircleCheck } from '../icons/IconCircleCheck.jsx';
import css from './Toaster.module.css';
import clsx from 'clsx';

export const Toast = ({
  headMessage = 'Done',
  bodyMessage,
  toast: { duration, id },
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleAnimationEnd = () => {
    if (!visible) {
      onClose(id);
    }
  };

  return (
    <div
      className={clsx(
        css.toastThumb,
        visible ? css.animateEnter : css.animateLeave
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      <p className={css.toastTitle}>
        <span className={css.iconWrapper}>
          <IconCircleCheck />
        </span>
        {headMessage}
      </p>
      {bodyMessage && <p className={css.toastMessage}>{bodyMessage}</p>}
    </div>
  );
};
