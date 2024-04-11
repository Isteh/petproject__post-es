import { FC } from 'react'
import { INavBarProps } from './NavBar.interface'
import { classNames } from 'shared/lib/classNames'
import styles from './NavBar.module.scss'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig'
import { AppLink } from 'shared/ui/AppLink'
import { Logo } from 'shared/ui/Logo'

const NavBar: FC<INavBarProps> = ({ className }) => {
    return <header className={classNames(styles.header, { [className]: className })}>

        <Logo className={styles.logo} />
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li>
                    <AppLink to={RoutePath[AppRoutes.HOME]} className={styles.link}>{AppRoutes.HOME}</AppLink>
                </li>
            </ul>
        </nav>
    </header >
}

export default NavBar
