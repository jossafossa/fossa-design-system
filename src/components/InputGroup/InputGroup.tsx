import { Children, PropsWithChildren } from 'react';
import styles from './InputGroup.module.scss';

type InputGroupProps = PropsWithChildren<{}>;

export const InputGroup = ({ children }: InputGroupProps) => {
  return (
    <div className={styles.inputGroup}>
      {Children.map(children, (child) => (
        <div className={styles.child}>{child}</div>
      ))}
    </div>
  );
};
