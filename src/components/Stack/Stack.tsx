import { PropsWithChildren } from 'react';
import styles from './Stack.module.scss';
import classNames from 'classnames';

export type StackProps = PropsWithChildren<{
  direction?: 'horizontal' | 'vertical';
}>;

export const Stack = ({ children, direction = 'horizontal' }: StackProps) => {
  return <div className={classNames(styles.stack, styles[direction])}>{children}</div>;
};
