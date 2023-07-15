import clsx from 'clsx';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import { AppLink, AppLinkTheme, Button, ButtonAppearance } from '@/shared/ui';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwwitcher';
import { ButtonSize } from '@/shared/ui/Button/Button';
import { RouterPath } from '@/shared/config/routerConfig/routerConfig';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('navbar');

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid='sidebar'
            className={clsx(styles.sidebar, collapsed && styles.collapsed, className)}
        >
            <Button
                appearance={ButtonAppearance.BG}
                size={ButtonSize.L}
                square
                className={styles['collapsed-btn']}
                data-testid='sidebar-toggle'
                type='button'
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles['items-links']}>
                <AppLink className={styles.item} to={RouterPath.main} theme={AppLinkTheme.PRIMARY}>
                    <HomeIcon className={styles.icon} />
                    <span className={styles.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink className={styles.item} to={RouterPath.about} theme={AppLinkTheme.PRIMARY}>
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={styles.language} />
            </div>
        </div>
    );
};
