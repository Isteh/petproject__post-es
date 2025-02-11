import { FC } from 'react';
import styles from './SidebarContent.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTheme } from 'app/providers/ThemeProvider';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { LoginSidebarElement } from 'features/Login';

const SidebarContent: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.topSection}>
        <LoginSidebarElement isCollapsed={collapsed} />
      </div>
      <div className={styles.bottomSection}>
        <LanguageSwitcher
          collapsed={collapsed}
          className={styles.languageSwitcher}
        />
        <ThemeSwitcher className={styles.themeSwitcher} collapsed={collapsed} />
        <span
          className={classNames(styles.themeText, {
            [styles.hidden]: collapsed,
          })}
        >
          {firstLetterCapitalize(t(`${theme} theme`))}
        </span>
      </div>
    </>
  );
};

export default SidebarContent;
