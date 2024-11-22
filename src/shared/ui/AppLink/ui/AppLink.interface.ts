import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export interface IAppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: APP_LINK_THEMES;
}

export enum APP_LINK_THEMES {
  INVERTED = 'inverted',
  SECONDARY = 'secondary',
  PRIMARY = 'primary',
}
