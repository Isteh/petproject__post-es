import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator, RouterDecorator],
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
