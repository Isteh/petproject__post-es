import { InputHTMLAttributes } from 'react';

export interface IInputElementProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange?: (value: string) => void;
  className?: string;
  value?: string;
  autoFocus?: boolean;
}
