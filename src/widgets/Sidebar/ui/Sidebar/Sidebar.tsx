import clsx from 'clsx';
import React, { useState } from 'react';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid='sidebar'
            className={clsx(styles.sidebar, collapsed && styles.collapsed, className)}
        >
            <button data-testid='sidebar-toggle' type='button' onClick={onToggle}>
                {t('Открыть')}
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={styles.language} />
            </div>
        </div>
    );
};
