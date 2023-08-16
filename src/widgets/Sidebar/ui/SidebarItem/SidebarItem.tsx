import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import type { SidebarItemType } from '../../model/Items';

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
            <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
    );
};
