import { ReactNode } from 'react';
import { IInputElementProps } from './InputElement/InputElement.interface';

export interface IInputProps extends IInputElementProps {
  label?: ReactNode;
}
