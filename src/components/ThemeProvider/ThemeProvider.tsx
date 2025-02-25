import { createContext } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ThemeContext.Provider;
