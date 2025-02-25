import classNames from 'classnames';
import styles from './Picture.module.scss';
import { HasLoader } from '@slices';
import { Skeleton } from '@components';

type PictureProps = {
  source: string;
  alt: string;
  ratio?: [number, number];
  className?: string;
};

export const Picture = ({
  source,
  alt,
  ratio,
  className,
  isLoading = false,
}: HasLoader<PictureProps>) => {
  return isLoading ? (
    <Skeleton
      className={classNames(className, styles.picture)}
      style={{ aspectRatio: ratio?.join('/') }}
    />
  ) : (
    <picture
      className={classNames(className, styles.picture)}
      style={{ aspectRatio: ratio?.join('/') }}
    >
      <img className={styles.img} src={source} alt={alt} />
    </picture>
  );
};
