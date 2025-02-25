import classNames from 'classnames';
import styles from './Skeleton.module.scss';
import { CSSProperties } from 'react';

type SkeletonProps = {
  className?: string;
  style?: CSSProperties;
  lines?: number;
};

export const Skeleton = ({ className, style, lines = 1 }: SkeletonProps) => {
  return (
    <div
      className={classNames(styles.skeleton, className)}
      style={{ ...style, '--lines': lines } as CSSProperties}
    />
  );
};
