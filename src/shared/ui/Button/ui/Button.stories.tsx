import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { BUTTON_THEMES } from 'shared/ui/Button/ui/Button.interface';

const meta = {
  title: 'shared/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '3em',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    theme: BUTTON_THEMES.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    theme: BUTTON_THEMES.SECONDARY,
  },
};

export const Border: Story = {
  args: {
    children: 'Button',
    theme: BUTTON_THEMES.BORDER,
  },
};

export const Invert: Story = {
  args: {
    children: 'Button',
    theme: BUTTON_THEMES.INVERT,
  },
};
