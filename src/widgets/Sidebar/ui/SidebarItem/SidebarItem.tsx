import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import type { SidebarItemType } from '../../model/Items';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebarLinks');
    const variants = {
        open: { opacity: 1, transform: 'scale(1)' },
        closed: { opacity: 0, transform: 'scale(0.2)' },
    };

    return (
        <AppLink
            className={clsx(styles.item, collapsed && styles.collapsed)}
            to={item.path}
            theme={AppLinkTheme.PRIMARY}
        >
            <item.Icon className={styles.icon} />
            <motion.span
                className={styles.link}
                animate={!collapsed ? 'open' : 'closed'}
                variants={variants}
                initial='closed'
                exit='closed'
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }}
            >
                {t(item.text)}
            </motion.span>
        </AppLink>
    );
};
