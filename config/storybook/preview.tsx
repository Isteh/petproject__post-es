import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { I18nDecorator } from 'shared/config/storybook/I18nDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const preview: Preview = {
  decorators: [
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
    I18nDecorator,
    StoreDecorator,
  ],
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
