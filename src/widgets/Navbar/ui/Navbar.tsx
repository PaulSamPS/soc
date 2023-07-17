import clsx from 'clsx';
import { createPortal } from 'react-dom';
import React, { AllHTMLAttributes, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonAppearance } from '@/shared/ui';
import styles from './Navbar.module.scss';
import { AuthModal } from '@/features/Auth/AuthModal/AuthModal';

interface NavbarProps extends AllHTMLAttributes<HTMLDivElement> {}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={clsx(styles.navbar, className)}>
            <Button
                appearance={ButtonAppearance.CLEAR}
                className={styles.link}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {createPortal(
                <AuthModal onClose={onToggleModal} isOpen={isAuthModal} />,
                document.body
            )}
        </div>
    );
};
