import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur at ea officiis optio voluptate? Quaerat in iure iusto odiounde. Dolor ut amet voluptate harum officia quis sunt aspernatur.',
    isOpen: true,
  },
};
