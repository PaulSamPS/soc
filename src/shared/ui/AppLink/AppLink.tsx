import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => (
    <Link
        to={to}
        className={clsx(styles['app-link'], styles[theme], className)}
        {...otherProps}
    >
        {children}
    </Link>
);
