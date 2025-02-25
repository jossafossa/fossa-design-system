import { PropsWithChildren } from 'react';
import styles from './Heading.module.scss';
import classNames from 'classnames';
import { Skeleton } from '@components';
import { type HasLoader } from '@utils';

type HeadingValues = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  level: HeadingValues;
  visual?: HeadingValues;
  className?: string;
};

export const Heading = ({
  level,
  visual,
  children,
  className,
  isLoading = false,
}: HasLoader<PropsWithChildren<HeadingProps>>) => {
  visual = visual || level;

  const props = {
    className: classNames(styles.reset, styles[`heading-${visual}`], className),
  };

  if (isLoading) {
    return <Skeleton className={classNames(styles.heading, styles[`heading-${visual}`])} />;
  }

  if (level === 1) return <h1 {...props}>{children}</h1>;
  if (level === 2) return <h2 {...props}>{children}</h2>;
  if (level === 3) return <h3 {...props}>{children}</h3>;
  if (level === 4) return <h4 {...props}>{children}</h4>;
  if (level === 5) return <h5 {...props}>{children}</h5>;
  if (level === 6) return <h6 {...props}>{children}</h6>;
};
