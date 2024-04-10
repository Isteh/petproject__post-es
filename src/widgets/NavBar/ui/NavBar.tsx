import { FC } from 'react'
import { INavBarProps } from './NavBar.interface'
import { classNames } from 'shared/lib/classNames'
import styles from './NavBar.module.scss'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig'
import { AppLink } from 'shared/ui/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

const NavBar: FC<INavBarProps> = ({ className }) => {
    return <nav
        className={classNames(styles.nav, { className: !!className })}>
        <ThemeSwitcher />

        <ul className={styles.links}>
            <li>
                <AppLink to={RoutePath[AppRoutes.HOME]} className={styles.link}>{AppRoutes.HOME}</AppLink>
            </li>
        </ul>
    </nav>
}

export default NavBar
