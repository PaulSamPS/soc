import clsx from 'clsx';
import React, {
    AllHTMLAttributes,
    MouseEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from '@/shared/assets/icons';

interface ModalProps extends AllHTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    closeIcon?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
    closeIcon = false,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const classes: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles['is-closing']]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={clsx(styles.modal, classes, className)}>
            <div className={styles.overlay} onClick={closeHandler}>
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                    {closeIcon && <CloseIcon className={styles['close-icon']} onClick={onClose} />}
                </div>
            </div>
        </div>
    );
};
