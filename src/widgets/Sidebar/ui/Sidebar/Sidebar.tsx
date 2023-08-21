import clsx from 'clsx';
import React, { memo, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwwitcher';
import styles from './Sidebar.module.scss';
import { Button, ButtonAppearance, ButtonSize } from '@/shared/ui/Button';
import { SidebarItemsList } from '../../model/Items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { animateSidebar } from '../../model/constants/animate';

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
        <AnimatePresence>
            <motion.div
                data-testid='sidebar'
                className={clsx(styles.sidebar, collapsed && styles.collapsed, className)}
                animate={!collapsed ? 'open' : 'closed'}
                variants={animateSidebar}
                initial='closed'
                exit='closed'
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }}
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
                <motion.div className={styles['items-links']}>
                    {itemsList}
                </motion.div>
                <div className={styles.switchers}>
                    <ThemeSwitcher />
                    <LanguageSwitcher short={collapsed} className={styles.language} />
                </div>
            </motion.div>
        </AnimatePresence>
    );
});
