import { FC, memo } from 'react';
import styles from './Input.module.scss';
import { IInputProps } from './Input.interface';
import { classNames } from 'shared/lib/classNames';
import InputElement from './InputElement/InputElement';

const Input: FC<IInputProps> = memo(({ label, className, ...props }) => {
  return label ? (
    <label className={classNames(styles.label, className)}>
      <span className={styles.text}>{label}</span>
      <InputElement {...props} />
    </label>
  ) : (
    <InputElement {...props} className={className} />
  );
});

export default Input;
