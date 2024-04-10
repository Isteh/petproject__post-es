import { createContext } from 'react';

export enum APP_THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContextProps {
  theme?: APP_THEMES;
  setTheme?: (theme: APP_THEMES) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME = 'theme';
