import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}

export const AppLink = memo(({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: AppLinkProps) => (
    <Link to={to} className={clsx(styles['app-link'], styles[theme], className)} {...otherProps}>
        {children}
    </Link>
));
