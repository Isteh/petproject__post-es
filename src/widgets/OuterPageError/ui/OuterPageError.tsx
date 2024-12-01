import { FC } from 'react';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import styles from './OuterPageError.module.scss';

const PageError: FC = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        {firstLetterCapitalize('something went wrong')}!
      </p>
      <button onClick={reloadPage} className={styles.button}>
        {firstLetterCapitalize('refresh page')}
      </button>
    </div>
  );
};

export default PageError;
