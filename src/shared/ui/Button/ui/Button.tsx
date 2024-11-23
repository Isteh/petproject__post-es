import { FC } from 'react';
import styles from './Button.module.scss';
import { BUTTON_SIZES, BUTTON_THEMES, IButtonProps } from './Button.interface';
import { classNames } from 'shared/lib/classNames';

const Button: FC<IButtonProps> = ({
  className,
  children,
  theme = BUTTON_THEMES.INVERT,
  size = BUTTON_SIZES.NORMAL,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(styles.button, {
        [className]: className,
        [styles[theme]]: theme,
        [styles[size]]: size,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
