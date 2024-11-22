import type { Meta, StoryObj } from '@storybook/react';

import LanguageSwitcher from './LanguageSwitcher';

const meta = {
  title: 'shared/LanguageSwitcher',
  component: LanguageSwitcher,
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
