import { FC, useState } from 'react'
import styles from './Sidebar.module.scss'
import { ISidebarProps } from './Sidebar.interface'
import { classNames } from 'shared/lib/classNames'
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses'
import { Logo } from 'shared/ui/Logo'
import SidebarContent from '../SidebarContent/SidebarContent'

const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [buttonShow, setButtonShow] = useState(false)

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
            title={`${sidebarCollapsed ? 'show' : 'hide'} sidebar`}
            onClick={() => setSidebarCollapsed(prev => !prev)}
            // shows/hides the button in collapsed mode
            onMouseEnter={() => sidebarCollapsed && setButtonShow(true)}
            onMouseLeave={() => sidebarCollapsed && setButtonShow(false)}
        >

            {sidebarCollapsed ?
                <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
                    Show sidebar
                </span>
                :
                'Hide sidebar'}

        </button>

        <div className={styles.content}>
            <SidebarContent />
        </div>

    </aside>


}

export default Sidebar