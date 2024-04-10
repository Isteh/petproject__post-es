import { HTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: BUTTON_THEMES;
}

export enum BUTTON_THEMES {
  SECONDARY = 'secondary',
  PRIMARY = 'primary',
  INVERT = 'invert',
  BORDER = 'border',
}
