import React from 'react';
import { IconCircleCheck } from '../icons/IconCircleCheck.jsx';
import css from './Toast.module.css';
import clsx from 'clsx';

export const Toast = ({ t }) => {
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
        Message Sent!
      </p>
      <p className={css.toastMessage}>
        Thanks for completing the form. We’ll be in touch soon!
      </p>
    </div>
  );
};
