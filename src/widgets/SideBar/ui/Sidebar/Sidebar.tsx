import { FC, useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.interface';
import { classNames } from 'shared/lib/classNames';
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses';
import SidebarContent from '../SidebarContent/SidebarContent';
import { useTranslation } from 'react-i18next';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import { GLOBAL_CSS_VARIABLES } from 'app/styles/globalCssVariables';
import { useDispatch, useSelector } from 'react-redux';
import {
  apperanceActions,
  getApperanceIsSidebarCollapsed,
} from 'entities/Apperance';

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const sidebarCollapsed = useSelector(getApperanceIsSidebarCollapsed);
  const dispatch = useDispatch();
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
          [styles.topLocation]: !isTopOfPage,
        })}
        title={sidebarCollapsed ? t('show sidebar') : t('hide sidebar')}
        onClick={() => dispatch(apperanceActions.sidebarCollapsedToggle())}
      >
        {sidebarCollapsed ? (
          <>
            <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
              {t('show sidebar')}
            </span>
            &gt;&gt;
          </>
        ) : (
          firstLetterCapitalize(t('hide sidebar'))
        )}
      </button>

      <div className={styles.content}>
        <SidebarContent collapsed={sidebarCollapsed} />
      </div>
    </aside>
  );
};

export default Sidebar;
