import type { Meta, StoryObj } from '@storybook/react';

import PageWrapper from './PageWrapper';

const meta = {
  title: 'shared/PageWrapper',
  component: PageWrapper,
} satisfies Meta<typeof PageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'page' },
};
