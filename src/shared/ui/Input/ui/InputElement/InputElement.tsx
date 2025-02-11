import { FC, memo, useEffect, useRef } from 'react';
import styles from './InputElement.module.scss';
import { IInputElementProps } from './InputElement.interface';
import { classNames } from 'shared/lib/classNames';

const InputElement: FC<IInputElementProps> = memo(
  ({
    className,
    onChange,
    type = 'text',
    value,
    autoFocus = false,
    ...props
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus) inputRef.current?.focus();
    }, [autoFocus]);
    return (
      <input
        {...props}
        type={type}
        value={value}
        ref={inputRef}
        onChange={(e) => onChange?.(e.target.value)}
        className={classNames(styles.input, className)}
      />
    );
  }
);

export default InputElement;
