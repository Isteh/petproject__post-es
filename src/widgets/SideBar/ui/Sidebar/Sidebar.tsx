import { FC, useState } from 'react';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.interface';
import { classNames } from 'shared/lib/classNames';
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses';
import { Logo } from 'shared/ui/Logo';
import SidebarContent from '../SidebarContent/SidebarContent';
import { useTranslation } from 'react-i18next';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';

const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [buttonShow, setButtonShow] = useState(false);
    const { t } = useTranslation();

    return <aside
        className={classNames(styles.sidebar, {
            [className]: className,
            [styles.collapsed]: sidebarCollapsed
        })}
    >
        <Logo className={styles.logo} />

        <button className={classNames(styles.toggler, {
            [styles.show]: buttonShow
        })}
            title={sidebarCollapsed ? t('show sidebar') : t('hide sidebar')}
            onClick={() => setSidebarCollapsed(prev => !prev)}
            // shows/hides the button in collapsed mode
            onMouseEnter={() => sidebarCollapsed && setButtonShow(true)}
            onMouseLeave={() => sidebarCollapsed && setButtonShow(false)}
        >

            {sidebarCollapsed ?
                <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
                    {t('show sidebar')}
                </span>
                :
                firstLetterCapitalize(t('hide sidebar'))}

        </button>

        <div className={styles.content}>
            <SidebarContent />
        </div>

    </aside>;


};

export default Sidebar;