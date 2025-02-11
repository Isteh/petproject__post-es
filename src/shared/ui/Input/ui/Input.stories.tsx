import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
const meta = {
  title: 'shared/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: {} };
export const Placeholder: Story = { args: { placeholder: 'placeholder' } };
export const WithLabel: Story = { args: { label: 'label' } };
export const WithJSXLabel: Story = {
  args: {
    label: (
      <>
        label
        <br /> sdafsadf
      </>
    ),
  },
};
export const WithLabelAndPlaceholder: Story = {
  args: { label: 'label', placeholder: 'placeholder' },
};
export const Autofocus: Story = { args: { autoFocus: true } };
