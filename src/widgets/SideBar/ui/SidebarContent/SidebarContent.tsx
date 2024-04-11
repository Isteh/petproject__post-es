import { FC } from 'react'
import styles from './SidebarContent.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useTheme } from 'app/providers/ThemeProvider'
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const SidebarContent: FC = () => {
    const { theme } = useTheme()
    const { t } = useTranslation()
    return <>
        <span className={styles.bottomSection} />
        <LanguageSwitcher className={styles.languageSwitcher} />
        <ThemeSwitcher className={styles.themeSwitcher} />
        <span className={styles.themeText}>{firstLetterCapitalize(t(`${theme} theme`))}</span>
    </>
}

export default SidebarContent