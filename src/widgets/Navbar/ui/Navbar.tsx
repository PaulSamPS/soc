import clsx from 'clsx';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({ className }: NavbarProps) => (
    <div className={clsx(styles.navbar, className)}>
        <div className={styles.links}>
            <AppLink to='/' theme={AppLinkTheme.PRIMARY} className={styles['main-link']}>Главная</AppLink>
            <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>О сайте</AppLink>
        </div>
    </div>
);
