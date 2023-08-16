import clsx from 'clsx';
import React, { memo, useMemo, useState } from 'react';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwwitcher';
import styles from './Sidebar.module.scss';
import { Button, ButtonAppearance, ButtonSize } from '@/shared/ui/Button';
import { SidebarItemsList } from '../../model/Items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    )), [collapsed]);

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
                {itemsList}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={styles.language} />
            </div>
        </div>
    );
});
