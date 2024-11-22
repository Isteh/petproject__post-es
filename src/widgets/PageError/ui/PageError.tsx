import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import { Button } from 'shared/ui/Button';
import styles from './PageError.module.scss';

const PageError: FC = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        {firstLetterCapitalize(t('something went wrong'))}!
      </p>
      <Button onClick={reloadPage} className={styles.button}>
        {firstLetterCapitalize(t('refresh page'))}
      </Button>
    </div>
  );
};

export default PageError;
