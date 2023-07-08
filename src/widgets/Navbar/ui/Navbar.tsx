import clsx from 'clsx';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={clsx(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink to='/' theme={AppLinkTheme.PRIMARY} className={styles['main-link']}>
                    {t('Главная')}
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
