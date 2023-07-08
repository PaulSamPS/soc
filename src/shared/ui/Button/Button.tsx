import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme: ThemeButton;
}

export const Button: FC<ButtonProps & PropsWithChildren> = ({
    className, children, theme, ...otherProps
}) => (
    <button type='button' className={clsx(styles.button, styles[theme], className)} {...otherProps}>
        {children}
    </button>
);
