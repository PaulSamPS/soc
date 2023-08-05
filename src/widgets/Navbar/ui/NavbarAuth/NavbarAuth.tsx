import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NavbarAuth.module.scss';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { ProfileIcon } from '@/shared/assets/icons';

interface SidebarAuthProps {
    className?: string;
    isLogin: boolean;
    onToggleModal: () => void;
}

export const NavbarAuth = ({ className, isLogin, onToggleModal }: SidebarAuthProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={clsx(styles['navbar-auth'], className)}>
            {isLogin ? (
                <div className={styles.profile}>
                    <ProfileIcon />
                    <Button
                        appearance={ButtonAppearance.CLEAR}
                        onClick={() => console.log('Профиль')}
                    >
                        {t('Профиль')}
                    </Button>
                </div>
            ) : (
                <Button
                    appearance={ButtonAppearance.CLEAR}
                    className={styles.link}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
            )}
        </div>
    );
};
