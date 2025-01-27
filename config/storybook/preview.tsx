import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { I18nDecorator } from 'shared/config/storybook/I18nDecorator';

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator, RouterDecorator, I18nDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args: {
    isDarkThemeApp: false,
  },
};

export default preview;
