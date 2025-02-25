import { createContext, PropsWithChildren, useContext, useId } from 'react';
import styles from './FormControl.module.scss';
import { Text } from '@components';

type FormControlProps = PropsWithChildren;

type FormControlContextProps = {
  id: string;
};

const FormControlContext = createContext<FormControlContextProps>({
  id: '',
});

export const useFormControlContext = () => useContext(FormControlContext);

export const FormControl = ({ children }: FormControlProps) => {
  const id = useId();

  return (
    <FormControlContext.Provider value={{ id }}>
      <div className={styles.formControl}>{children}</div>
    </FormControlContext.Provider>
  );
};

export const FormControlLabel = ({ children }: FormControlProps) => {
  const { id } = useFormControlContext();

  return (
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  );
};

export const FormControlValidation = ({ children }: FormControlProps) => {
  return (
    <Text as="span" size="small" className={styles.validation}>
      {children}
    </Text>
  );
};

export const FormControlHint = ({ children }: FormControlProps) => {
  return (
    <Text as="span" muted size="small" className={styles.hint}>
      {children}
    </Text>
  );
};

FormControl.Label = FormControlLabel;
FormControl.Validation = FormControlValidation;
FormControl.Hint = FormControlHint;
