import { FC } from 'react';
import styles from './SidebarElement.module.scss';
import { ISidebarElementProps } from './SidebarElement.interface';
import { classNames } from 'shared/lib/classNames';

const SidebarElement: FC<ISidebarElementProps> = ({
  className,
  Icon,
  title,
  isCollapsed,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        styles.element,
        { [styles.collapsed]: isCollapsed },
        className
      )}
      onClick={onClick}
    >
      <Icon className={styles.icon} />
      {!isCollapsed && <span className={styles.title}>{title}</span>}
    </div>
  );
};

export default SidebarElement;
