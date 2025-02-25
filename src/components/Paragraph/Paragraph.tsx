import { PropsWithChildren } from 'react';
import styles from './Paragraph.module.scss';
import classNames from 'classnames';
import { TextProps, Text } from '../Text';

type ParagraphProps = PropsWithChildren<{}> & Omit<TextProps, 'as'>;

export const Paragraph = ({ children, ...textProps }: ParagraphProps) => (
  <Text as="p" className={classNames(styles.paragraph)} {...textProps}>
    {children}
  </Text>
);
