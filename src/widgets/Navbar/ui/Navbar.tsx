import clsx from 'clsx';
import styles from './Navbar.module.scss';

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => (
    <div className={clsx(styles.navbar, className)}>
        <div className={styles.links}>/</div>
    </div>
);
