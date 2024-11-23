import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import {
  BUTTON_SIZES,
  BUTTON_THEMES,
} from 'shared/ui/Button/ui/Button.interface';

const meta = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalNormal: Story = {
  args: {
    theme: BUTTON_THEMES.NORMAL,
    size: BUTTON_SIZES.NORMAL,
  },
};

export const NormalSmall: Story = {
  args: {
    theme: BUTTON_THEMES.NORMAL,
    size: BUTTON_SIZES.SMALL,
  },
};

export const NormalBIG: Story = {
  args: {
    theme: BUTTON_THEMES.NORMAL,
    size: BUTTON_SIZES.BIG,
  },
};

export const PrimaryNormal: Story = {
  args: {
    theme: BUTTON_THEMES.PRIMARY,
    size: BUTTON_SIZES.NORMAL,
  },
};

export const PrimarySmall: Story = {
  args: {
    theme: BUTTON_THEMES.PRIMARY,
    size: BUTTON_SIZES.SMALL,
  },
};

export const PrimaryBIG: Story = {
  args: {
    theme: BUTTON_THEMES.PRIMARY,
    size: BUTTON_SIZES.BIG,
  },
};

export const SecondaryNormal: Story = {
  args: {
    theme: BUTTON_THEMES.SECONDARY,
    size: BUTTON_SIZES.NORMAL,
  },
};
export const SecondarySmall: Story = {
  args: {
    theme: BUTTON_THEMES.SECONDARY,
    size: BUTTON_SIZES.SMALL,
  },
};
export const SecondaryBIG: Story = {
  args: {
    theme: BUTTON_THEMES.SECONDARY,
    size: BUTTON_SIZES.BIG,
  },
};
export const BorderNormal: Story = {
  args: {
    theme: BUTTON_THEMES.BORDER,
    size: BUTTON_SIZES.NORMAL,
  },
};
export const BorderSmall: Story = {
  args: {
    theme: BUTTON_THEMES.BORDER,
    size: BUTTON_SIZES.SMALL,
  },
};
export const BorderBIG: Story = {
  args: {
    theme: BUTTON_THEMES.BORDER,
    size: BUTTON_SIZES.BIG,
  },
};
export const InvertNormal: Story = {
  args: {
    theme: BUTTON_THEMES.INVERT,
    size: BUTTON_SIZES.NORMAL,
  },
};
export const InvertSmall: Story = {
  args: {
    theme: BUTTON_THEMES.INVERT,
    size: BUTTON_SIZES.SMALL,
  },
};
export const InvertBIG: Story = {
  args: {
    theme: BUTTON_THEMES.INVERT,
    size: BUTTON_SIZES.BIG,
  },
};
