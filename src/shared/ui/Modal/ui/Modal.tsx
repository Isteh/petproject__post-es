import {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.interface';
import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import { GLOBAL_CSS_CLASSES } from 'app/styles/globalClasses';
import { useTranslation } from 'react-i18next';

const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  children,
  lazy = false,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { t } = useTranslation();
  const ANIMATION_DELAY = 300;

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div
        style={
          {
            '--animation-delay': `0.${ANIMATION_DELAY / 100}s`,
          } as CSSProperties
        }
        className={classNames(styles.overlay, {
          [styles.open]: isOpen,
          [styles.closing]: isClosing,
        })}
        onClick={closeModal}
      >
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={closeModal}>
            <span className={GLOBAL_CSS_CLASSES.HIDDEN}>
              {t('close modal window')}
            </span>
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
