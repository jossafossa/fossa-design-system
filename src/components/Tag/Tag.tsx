import { CSSProperties, PropsWithChildren } from 'react';
import styles from './Tag.module.scss';
import { Clickable, type ClickableProps } from '@components';
import { useSeededNumber } from '@hooks';
import classNames from 'classnames';

type TagProps = ClickableProps & {
  colors?: string[];
  autoColor?: boolean;
  variant?: 'primary' | 'secondary';
};

export const Tag = ({
  children,
  colors,
  autoColor = false,
  variant = 'primary',
  ...clickableProps
}: PropsWithChildren<TagProps>) => {
  const seed = useSeededNumber(children?.toString() ?? '');
  const color = autoColor ? colors?.[seed % colors.length] : colors?.[0];

  return (
    <Clickable
      className={classNames(styles.tag, styles[variant])}
      style={{ '--color': autoColor && color } as CSSProperties}
      {...clickableProps}
    >
      {children}
    </Clickable>
  );
};
