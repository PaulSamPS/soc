import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import type { SidebarItemType } from '../../model/Items';
import { animateItems } from '../../model/constants/animate';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebarLinks');

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
                variants={animateItems}
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
