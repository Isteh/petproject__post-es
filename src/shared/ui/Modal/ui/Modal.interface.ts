import { ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  lazy?: boolean;
  onClose?: () => void;
}
