import type { Meta, StoryObj } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import { i18nForTests } from 'shared/config/i18nForTests';

const meta = {
  title: 'shared/LanguageSwitcher',
  component: LanguageSwitcher,
  decorators: [
    (Stories) => (
      <I18nextProvider i18n={i18nForTests}>
        <Stories />
      </I18nextProvider>
    ),
  ],
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Collapsed: Story = { args: { collapsed: true } };
