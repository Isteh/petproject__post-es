import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apperanceActions } from 'entities/Apperance';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Collapsed: Story = {
  decorators: [
    (Story) => {
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(apperanceActions.sidebarCollapsedToggle());
      }, [dispatch]);
      return <Story></Story>;
    },
  ],
};
