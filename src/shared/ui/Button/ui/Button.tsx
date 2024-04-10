import { FC } from 'react'
import styles from './Button.module.scss'
import { IButtonProps } from './Button.interface'
import { classNames } from 'shared/lib/classNames'

const Button: FC<IButtonProps> = ({ className, children, theme, ...props }) => {
    return <button
        {...props}
        className={classNames(styles.button, {
            [className]: className,
            [styles[theme]]: theme
        })}>
        {children}
    </button>
}

export default Button