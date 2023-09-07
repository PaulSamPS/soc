import clsx from 'clsx';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { animate } from '@/widgets/Navbar/models/constants/animate';
import styles from './NavbarAuth.module.scss';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { Dropdown } from '@/shared/ui/Dropdown/ui/Dropdown/Dropdown';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { userActions } from '@/entities/User';
import { DropdownItemList } from '@/shared/ui/Dropdown/ui/DropdownItemList/DropdownItemList';
import { MenuItemsList } from '@/widgets/Navbar/models/constants/menuItemsList';
import { ProfileIcon } from '@/shared/assets/icons';

interface SidebarAuthProps {
    className?: string;
    isLogin: boolean;
    onToggleModal: () => void;
    username: string | undefined
}

export const NavbarAuth = memo(({ className, isLogin, onToggleModal, username }: SidebarAuthProps) => {
    const { t } = useTranslation('menu');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onNavigate = useCallback((to: string, text?: string) => {
        if (text === t('Выйти')) {
            dispatch(userActions.logout());
        }
        navigate(to);
    }, [dispatch, navigate, t]);

    const itemList = useMemo(() => MenuItemsList.map((i) => (
        <DropdownItemList
            key={i.path}
            path={i.path}
            text={i.text}
            Icon={i.Icon}
            translation='menu'
            onNavigate={onNavigate}
        />
    )), [onNavigate]);

    if (isLogin) {
        return (
            <div className={clsx(styles['navbar-auth'], className)}>
                <Dropdown
                    label={username}
                    open={open}
                    setOpen={setOpen}
                    animate={open ? 'open' : 'closed'}
                    initial='closed'
                    exit='closed'
                    variants={animate}
                    Icon={ProfileIcon}
                >
                    {itemList}
                </Dropdown>
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
