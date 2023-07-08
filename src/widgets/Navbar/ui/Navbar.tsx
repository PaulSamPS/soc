import React from 'react';
import styles from './Navbar.module.scss';
import clsx from "clsx";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={clsx(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink to={'/'} theme={AppLinkTheme.PRIMARY} className={styles['main-link']}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}>О нас</AppLink>
            </div>
        </div>
    );
};


