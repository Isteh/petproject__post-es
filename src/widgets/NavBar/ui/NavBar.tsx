import { FC } from 'react'
import { INavBarProps } from './NavBar.interface'
import { classNames } from 'shared/lib/classNames'
import styles from './NavBar.module.scss'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig'
import { AppLink } from 'shared/ui/AppLink'
import { Logo } from 'shared/ui/Logo'
import { useTranslation } from 'react-i18next'
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize'

const NavBar: FC<INavBarProps> = ({ className }) => {
    const { t } = useTranslation('routes')
    return <header className={classNames(styles.header, { [className]: className })}>

        <Logo className={styles.logo} />
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li>
                    <AppLink to={RoutePath[AppRoutes.HOME]} className={styles.link}>
                        {firstLetterCapitalize(t(AppRoutes.HOME))}
                    </AppLink>
                </li>
            </ul>
        </nav>
    </header >
}

export default NavBar
