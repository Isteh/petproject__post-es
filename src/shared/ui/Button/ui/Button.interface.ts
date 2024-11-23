import { HTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: BUTTON_SIZES;
  theme?: BUTTON_THEMES;
}

export enum BUTTON_THEMES {
  NORMAL = 'normal',
  SECONDARY = 'secondary',
  PRIMARY = 'primary',
  INVERT = 'invert',
  BORDER = 'border',
}

export enum BUTTON_SIZES {
  NORMAL = 'normal_size',
  SMALL = 'small_size',
  BIG = 'big_size',
}
