import { Decorator } from '@storybook/react/*';
import { APP_THEMES } from 'app/providers/ThemeProvider';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useEffect } from 'react';

export const ThemeDecorator: Decorator = (Story, { args }) => {
  let theme = APP_THEMES.LIGHT;
  if (args.isDarkThemeApp) {
    theme = APP_THEMES.DARK;
  }
  useEffect(() => {
    if (args.isDarkThemeApp) {
      document.body.classList.remove(APP_THEMES.LIGHT);
      document.body.classList.add(APP_THEMES.DARK);
    } else {
      document.body.classList.add(APP_THEMES.LIGHT);
      document.body.classList.remove(APP_THEMES.DARK);
    }
  }, [args]);
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
