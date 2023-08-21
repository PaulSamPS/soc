import clsx from 'clsx';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import type { MotionProps, Variants } from 'framer-motion';
import styles from './NavbarAuth.module.scss';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemsList } from '@/shared/ui/Dropdown/model/Items';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { userActions } from '@/entities/User';

interface SidebarAuthProps {
    className?: string;
    isLogin: boolean;
    onToggleModal: () => void;
    username: string
}

export const NavbarAuth = memo(({ className, isLogin, onToggleModal, username }: SidebarAuthProps) => {
    const { t } = useTranslation('profile');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const menu = {
        closed: {
            scale: 0,
            transition: {
                delay: 0.15,
            },
        },
        open: {
            scale: 1,
            transition: {
                type: 'spring',
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.05,
            },
        },
    } satisfies Variants;

    const item = {
        variants: {
            closed: { x: -16, opacity: 0 },
            open: { x: 0, opacity: 1 },
        },
        transition: { opacity: { duration: 0.2 } },
    } satisfies MotionProps;

    const onNavigate = useCallback((to: string, text: string) => {
        if (text === t('Выйти')) {
            dispatch(userActions.logout());
        }
        navigate(to);
    }, [dispatch, navigate, t]);

    const itemList = useMemo(() => DropdownItemsList.map((i) => (
        <DropdownItem {...item} key={i.path} onClick={() => onNavigate(i.path, t(i.text))}>
            <i.Icon style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            {t(i.text)}
        </DropdownItem>
    )), [item, onNavigate, t]);

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
                    variants={menu}
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
