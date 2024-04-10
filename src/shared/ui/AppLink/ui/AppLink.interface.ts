import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export interface IAppLinkProps extends LinkProps {
  className: string;
  children: ReactNode;
  theme?: APP_LINK_THEMES;
}

export enum APP_LINK_THEMES {
  INVERTED = 'inverted',
  SECONDARY = 'secondary',
  PRIMARY = 'primary',
}
