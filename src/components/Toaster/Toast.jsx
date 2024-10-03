import React from 'react';
import { IconCircleCheck } from '../icons/IconCircleCheck.jsx';
import css from './Toaster.module.css';
import clsx from 'clsx';

export const Toast = ({ headMessage = 'Done', bodyMessage, t }) => {
  return (
    <div
      className={clsx(
        css.toastThumb,
        t.visible ? css.animateEnter : css.animateLeave
      )}
    >
      <p className={css.toastTitle}>
        <span className={css.iconWrapper}>
          <IconCircleCheck />
        </span>
        {headMessage}
      </p>
      {bodyMessage && (
        <p className={css.toastMessage}>
          {bodyMessage}
        </p>
      )}
    </div>
  );
};
