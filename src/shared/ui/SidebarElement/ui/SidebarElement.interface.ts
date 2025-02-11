import { FC, SVGProps } from 'react';

export interface ISidebarElementProps {
  isCollapsed: boolean;
  title: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  onClick?: () => void;
}
