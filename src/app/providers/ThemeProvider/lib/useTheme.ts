import { useContext } from 'react';
import { LOCAL_STORAGE_THEME, APP_THEMES, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: APP_THEMES;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme =
      theme === APP_THEMES.LIGHT ? APP_THEMES.DARK : APP_THEMES.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
  };

  return {
    toggleTheme,
    theme,
  };
}
