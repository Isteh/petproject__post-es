import type { Meta, StoryObj } from '@storybook/react';

import InnerPageError from './InnerPageError';

const meta = {
  title: 'widgets/InnerPageError',
  component: InnerPageError,
} satisfies Meta<typeof InnerPageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
