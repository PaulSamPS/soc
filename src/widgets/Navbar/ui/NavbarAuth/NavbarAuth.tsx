import clsx from 'clsx';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './NavbarAuth.module.scss';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { ProfileIcon } from '@/shared/assets/icons';
import { RouterPath } from '@/shared/config/routerConfig';

interface SidebarAuthProps {
    className?: string;
    isLogin: boolean;
    onToggleModal: () => void;
    username: string
}

export const NavbarAuth = memo(({ className, isLogin, onToggleModal, username }: SidebarAuthProps) => {
    const { t } = useTranslation('navbar');
    const navigate = useNavigate();

    if (isLogin) {
        return (
            <div className={clsx(styles['navbar-auth'], className)}>
                <div className={styles.profile}>
                    <ProfileIcon />
                    <Button
                        appearance={ButtonAppearance.CLEAR}
                        onClick={() => navigate(RouterPath.profile)}
                    >
                        {username}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={clsx(styles['navbar-auth'], className)}>
            <Button
                appearance={ButtonAppearance.CLEAR}
                className={styles.link}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
