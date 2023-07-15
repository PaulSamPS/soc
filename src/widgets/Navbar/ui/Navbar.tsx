import clsx from 'clsx';
import { createPortal } from 'react-dom';
import React, { AllHTMLAttributes, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonAppearance } from '@/shared/ui';
import styles from './Navbar.module.scss';

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
                // eslint-disable-next-line i18next/no-literal-string
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem ducimus
                    maiores maxime officiis quia quos voluptatem. Alias, iste, nam?
                </Modal>,
                document.body
            )}
        </div>
    );
};
