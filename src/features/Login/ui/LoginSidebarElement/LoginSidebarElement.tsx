import { FC, useCallback, useState } from 'react';
import { SidebarElement } from 'shared/ui/SidebarElement';
import Icon from 'shared/assets/icons/user.svg';
import { firstLetterCapitalize } from 'shared/lib/firstLetterCapitalize';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '../LoginModal/LoginModal';
import { ILoginSidebarElementProps } from './LoginSidebarElement.interface';

export const LoginSidebarElement: FC<ILoginSidebarElementProps> = ({
  isCollapsed,
  className,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  return (
    <>
      <SidebarElement
        Icon={Icon}
        isCollapsed={isCollapsed}
        className={className}
        title={firstLetterCapitalize(t('login'))}
        onClick={toggleModal}
      />
      <LoginModal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
};
