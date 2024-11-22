import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import { Button, BUTTON_THEMES } from 'shared/ui/Button';
import styles from './NotFound.module.scss';
import { PageWrapper } from 'shared/ui/PageWrapper';

const NotFound: FC = () => {
  const { t } = useTranslation();
  const history = useNavigate();
  return (
    <PageWrapper className={styles.wrapper}>
      {firstLetterCapitalize(t('page not found'))}
      <Button
        theme={BUTTON_THEMES.PRIMARY}
        onClick={() => {
          history(-1);
        }}
      >
        {t('go back')}
      </Button>
    </PageWrapper>
  );
};

export default NotFound;
