import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { Clickable, Loader, type ClickableProps } from '@components';
import { focusBorder } from '@components';

export type ButtonProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}> &
  ClickableProps;

export const Button = ({
  children,
  size = 'medium',
  variant = 'primary',
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <Clickable
      className={classNames(
        styles.button,
        focusBorder,
        styles[size],
        styles[variant],
        isLoading && styles.isLoading,
      )}
      {...props}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.loader}>
        <Loader />
      </span>
    </Clickable>
  );
};
