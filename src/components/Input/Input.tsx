import React, { useRef } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import { type Combine } from '@utils';
import { focusBorder, Loader, useFormControlContext } from '@components';

export type InputProps = Combine<
  React.HTMLProps<HTMLInputElement>,
  {
    size?: 'small' | 'medium' | 'large';
    leadingElement?: React.ReactNode;
    trailingElement?: React.ReactNode;
    isLoading?: boolean;
  }
>;

export const Input = ({
  size = 'medium',
  isLoading = false,
  leadingElement,
  trailingElement,
  id,
  ...props
}: InputProps) => {
  const input = useRef<HTMLInputElement>(null);
  const { id: controlId } = useFormControlContext();

  console.log({ controlId });

  id = id || controlId;

  return (
    <div
      className={classNames(styles.wrapper, styles[size], focusBorder)}
      onClick={() => input.current?.focus()}
    >
      {leadingElement && <div className={styles.aside}>{leadingElement}</div>}
      <input ref={input} className={styles.input} id={id} {...props} />
      {(trailingElement || isLoading) && (
        <div className={styles.aside}>
          {!isLoading && trailingElement}
          {isLoading && <Loader />}
        </div>
      )}
    </div>
  );
};
