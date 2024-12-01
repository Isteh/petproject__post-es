import { ReactNode } from 'react';

export interface IErrorBoundaryProps {
  inner: boolean;
  children: ReactNode;
}
export interface IErrorBoundaryState {
  hasError: boolean;
}
