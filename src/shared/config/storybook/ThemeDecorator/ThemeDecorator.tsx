import { Decorator } from '@storybook/react/*';
import { APP_THEMES } from 'app/providers/ThemeProvider';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator: Decorator = (Story, { args }) => {
  let theme = APP_THEMES.LIGHT;
  if (args.isDarkThemeApp) {
    theme = APP_THEMES.DARK;
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
