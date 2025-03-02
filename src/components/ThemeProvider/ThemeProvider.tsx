import { createContext, PropsWithChildren, useContext } from 'react';

const ThemeContext = createContext<Theme | undefined>(undefined);

type Theme = {
  tokens: { [key: string]: string };
};

type ThemeProviderProps = {
  theme: Theme;
};

export const ThemeProvider = ({ theme, children }: PropsWithChildren<ThemeProviderProps>) => {
  const { tokens } = theme;
  return (
    <ThemeContext.Provider value={theme}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return theme;
};
