import { FC } from 'react';
import styles from './LanguageSwitcher.module.scss';
import { ILanguageSwitcherProps } from './LanguageSwitcher.interface';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses';
import { APP_LOCALES } from 'shared/config/locales';

const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({
  className,
  collapsed = false,
}) => {
  const { t, i18n } = useTranslation();
  const switchLanguage = () => {
    void i18n.changeLanguage(
      (i18n.language as APP_LOCALES) === APP_LOCALES.RU
        ? APP_LOCALES.EN
        : APP_LOCALES.RU
    );
  };

  return collapsed ? (
    <button
      className={classNames(styles.button, styles.active)}
      onClick={switchLanguage}
      title={t(['change language'])}
    >
      {firstLetterCapitalize(i18n.language.slice(0, 2))}
      <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
        {t(['change language'])}
      </span>
    </button>
  ) : (
    <ol className={classNames(styles.switcher, { [className]: className })}>
      {Object.values(APP_LOCALES).map((item) => (
        <li key={item}>
          {(i18n.language as APP_LOCALES) === item ? (
            <span className={styles.active}>
              {firstLetterCapitalize(item.slice(0, 2))}
            </span>
          ) : (
            <button
              className={styles.button}
              onClick={switchLanguage}
              title={t(['change language'])}
            >
              {firstLetterCapitalize(item.slice(0, 2))}
              <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
                {t(['change language'])}
              </span>
            </button>
          )}
        </li>
      ))}
    </ol>
  );
};

export default LanguageSwitcher;
