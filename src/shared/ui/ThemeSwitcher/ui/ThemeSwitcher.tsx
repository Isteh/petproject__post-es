import { useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import { IThemeSwitcherProps } from './ThemeSwitcher.interface'
import { classNames } from 'shared/lib/classNames'
import styles from './ThemeSwitcher.module.scss'
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses'
import { APP_THEMES } from 'app/providers/ThemeProvider'
import { useTranslation } from 'react-i18next'

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()
    const { t } = useTranslation();
    return <button
        title={t('change theme')}
        className={classNames(styles.button, {
            [className]: className,
            [styles.left]: theme === APP_THEMES.LIGHT
        })}
        onClick={toggleTheme}>
        <span className={GLOBAL_CSS_CLASSES.HIDDEN}>{t('change theme')}</span>
    </button>
}

export default ThemeSwitcher