import { FC, useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.interface';
import { classNames } from 'shared/lib/classNames';
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses';
import SidebarContent from '../SidebarContent/SidebarContent';
import { useTranslation } from 'react-i18next';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import { GLOBAL_CSS_VARIABLES } from 'app/styles/globalCssVariables';

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [buttonShow, setButtonShow] = useState(false);
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    const scrollSidebarContentHandler = () => {
      if (window.scrollY > GLOBAL_CSS_VARIABLES.NAVBAR_HEIGHT) {
        setisTopOfPage(false);
      } else {
        setisTopOfPage(true);
      }
    };
    window.removeEventListener('scroll', scrollSidebarContentHandler);
    window.addEventListener('scroll', scrollSidebarContentHandler, {
      passive: true,
    });
    return () =>
      window.removeEventListener('scroll', scrollSidebarContentHandler);
  }, []);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(styles.sidebar, {
        [className]: className,
        [styles.collapsed]: sidebarCollapsed,
      })}
    >
      <button
        data-testid="sidebar--toggler"
        className={classNames(styles.toggler, {
          [styles.show]: buttonShow,
          [styles.topLocation]: !isTopOfPage,
        })}
        title={sidebarCollapsed ? t('show sidebar') : t('hide sidebar')}
        onClick={() => setSidebarCollapsed((prev) => !prev)}
        // shows/hides the button in collapsed mode
        onMouseEnter={() => sidebarCollapsed && setButtonShow(true)}
        onMouseLeave={() => sidebarCollapsed && setButtonShow(false)}
      >
        {sidebarCollapsed ? (
          <span className={GLOBAL_CSS_CLASSES.HIDDEN}>{t('show sidebar')}</span>
        ) : (
          firstLetterCapitalize(t('hide sidebar'))
        )}
      </button>

      <div className={styles.content}>
        <SidebarContent />
      </div>
    </aside>
  );
};

export default Sidebar;
