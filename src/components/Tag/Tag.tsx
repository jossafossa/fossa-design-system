import { PropsWithChildren } from 'react';
import styles from './Tag.module.scss';
import { Clickable, type ClickableProps } from '@components';

type TagProps = ClickableProps;

export const Tag = ({ children, ...clickableProps }: PropsWithChildren<TagProps>) => {
  return (
    <Clickable className={styles.tag} {...clickableProps}>
      {children}
    </Clickable>
  );
};
