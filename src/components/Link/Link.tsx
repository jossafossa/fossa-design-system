import { PropsWithChildren } from 'react';
import styles from './Link.module.scss';
import { Clickable, ClickableProps } from '../Clickable';
import classNames from 'classnames';
import { focusBorder } from '../FocusBorder';

export type LinkProps = PropsWithChildren<{}> & ClickableProps;

export const Link = ({ children, ...clickableProps }: LinkProps) => {
  return (
    <Clickable className={classNames(styles.link, focusBorder)} {...clickableProps}>
      {children}
    </Clickable>
  );
};
