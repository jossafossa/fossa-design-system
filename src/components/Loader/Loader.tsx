import classNames from 'classnames';
import styles from './Loader.module.scss';

type LoaderProps = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

export const Loader = ({ color, size = 'medium' }: LoaderProps) => {
  return <span className={classNames(styles.loader, styles[size])} style={{ color }} />;
};
