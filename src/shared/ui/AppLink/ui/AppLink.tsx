import { FC } from 'react'
import styles from './AppLink.module.scss'
import { IAppLinkProps } from './AppLink.interface'
import { classNames } from 'shared/lib/classNames'
import { Link } from 'react-router-dom'

const AppLink: FC<IAppLinkProps> = ({ className, children, theme, ...props }) => {
    return <Link {...props}
        className={classNames(styles.link,
            {
                [`${className}`]: className,
                [`${styles[theme]}`]: theme
            })}>
        {children}
    </Link>
}

export default AppLink

