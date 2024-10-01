import { FC } from 'react'
import styles from './Loader.module.scss'
import { classNames } from 'shared/lib/classNames'
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses'
import { useTranslation } from 'react-i18next'
import { ILoaderProps } from './Loader.interface'

const Loader: FC<ILoaderProps> = ({ className }) => {
    const { t } = useTranslation();
    return <div className={classNames(styles.loader, { className })}>
        <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
            {t('loading')}
        </span>
    </div>
}

export default Loader