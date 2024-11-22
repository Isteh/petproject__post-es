import { Decorator } from '@storybook/react/*';
import { APP_THEMES } from 'app/providers/ThemeProvider';

export const ThemeDecorator: Decorator = (Story, { args }) => {
  let theme = APP_THEMES.LIGHT;
  if (args.isDarkThemeApp) {
    theme = APP_THEMES.DARK;
  }
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
