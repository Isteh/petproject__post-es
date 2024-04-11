import { FC } from 'react'
import styles from './SidebarContent.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useTheme } from 'app/providers/ThemeProvider'
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize'

const SidebarContent: FC = () => {
    const { theme } = useTheme()
    return <>
        <ThemeSwitcher className={styles.switcher} />
        <span className={styles.themeText}>{firstLetterCapitalize(theme)} theme</span>
    </>
}

export default SidebarContent