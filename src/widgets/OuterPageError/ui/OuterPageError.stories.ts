import type { Meta, StoryObj } from '@storybook/react';

import OuterPageError from './OuterPageError';

const meta = {
  title: 'widgets/OuterPageError',
  component: OuterPageError,
} satisfies Meta<typeof OuterPageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
