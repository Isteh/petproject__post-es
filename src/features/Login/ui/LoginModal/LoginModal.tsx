import { ILoginModalProps } from './LoginModal.interface';
import LoginForm from '../LoginForm/LoginForm';
import { FC, memo } from 'react';
import { Modal } from 'shared/ui/Modal';

export const LoginModal: FC<ILoginModalProps> = memo(({ isOpen, onClose }) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
});
