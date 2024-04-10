import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export interface IAppLinkProps extends LinkProps {
  className: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export enum AppLinkTheme {
  INVERTED = 'inverted',
}
