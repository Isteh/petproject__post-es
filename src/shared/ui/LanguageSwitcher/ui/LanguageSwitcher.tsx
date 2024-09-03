import { FC } from 'react'
import styles from './LanguageSwitcher.module.scss'
import { ILanguageSwitcherProps } from './LanguageSwitcher.interface'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize'
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses'

const locales = ['ru', 'en']

const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    return <ol
        className={classNames(styles.switcher, { [className]: className })}>
        {locales.map(item => <li key={item}>
            {i18n.language === item ?
                <span className={styles.active}>{firstLetterCapitalize(item)}</span> :
                <button className={styles.button}
                    onClick={() => void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
                    title={t(['change language'])}
                >{firstLetterCapitalize(item)}
                    <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
                        {t(['change language'])}
                    </span></button>}
        </li>)}
    </ol>
}

export default LanguageSwitcher