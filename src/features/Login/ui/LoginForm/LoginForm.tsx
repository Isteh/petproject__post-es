import { FC, FormEvent, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import styles from './LoginForm.module.scss';
import { Button, BUTTON_THEMES } from 'shared/ui/Button';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';

type TLoginFormFields = {
  name: string;
  password: string;
};

const LoginForm: FC = memo(() => {
  const { t } = useTranslation();
  const [fields, setFields] = useState<TLoginFormFields>({
    name: '',
    password: '',
  });

  const changeHandler = useCallback(
    (value: string, field: keyof typeof fields) => {
      setFields((prev) => {
        return { ...prev, [field]: value };
      });
    },
    [setFields]
  );

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <h2>{firstLetterCapitalize(t('login'))}</h2>
      <Input
        label={`${firstLetterCapitalize(t('name'))}: `}
        autoFocus
        name="name"
        value={fields.name}
        onChange={(value) => {
          changeHandler(value, 'name');
        }}
        className={styles.input}
      />
      <Input
        label={`${firstLetterCapitalize(t('password'))}: `}
        name="password"
        value={fields.password}
        onChange={(value) => {
          changeHandler(value, 'password');
        }}
        className={styles.input}
        type="password"
      />

      <Button className={styles.button} theme={BUTTON_THEMES.PRIMARY}>
        {t('submit')}
      </Button>
    </form>
  );
});

export default LoginForm;
