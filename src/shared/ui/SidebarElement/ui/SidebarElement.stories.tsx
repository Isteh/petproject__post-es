import type { Meta, StoryObj } from '@storybook/react';
import SidebarElement from './SidebarElement';
import Icon from 'shared/assets/icons/user.svg';

const meta = {
  title: 'shared/SidebarElement',
  component: SidebarElement,
} satisfies Meta<typeof SidebarElement>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { isCollapsed: false, title: 'title', Icon },
};
export const Collapsed: Story = {
  args: { isCollapsed: true, title: 'title', Icon },
};
