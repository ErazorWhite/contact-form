import { useCallback, useEffect, useState } from 'react';
import { IconCircleCheck } from '../icons';
import css from './Toaster.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Toast = ({
  headMessage = 'Done',
  bodyMessage,
  duration,
  id,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleAnimationEnd = useCallback(() => {
    if (!visible) {
      onClose(id);
    }
  }, [visible, onClose, id]);

  return (
    <div
      className={clsx(
        css.toastThumb,
        visible ? css.animateEnter : css.animateLeave
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      <h2 className={css.toastTitle}>
        <span className={css.iconWrapper}>
          <IconCircleCheck />
        </span>
        {headMessage}
      </h2>
      {bodyMessage && <p className={css.toastMessage}>{bodyMessage}</p>}
    </div>
  );
};

Toast.propTypes = {
  headMessage: PropTypes.string,
  bodyMessage: PropTypes.string,
  duration: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

