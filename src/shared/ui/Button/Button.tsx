import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

export enum Appearance {
    CLEAR = 'clear',
    PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance: Appearance;
}

export const Button: FC<ButtonProps & PropsWithChildren> = ({
    className,
    children,
    appearance,
    ...otherProps
}) => (
    <button
        type='button'
        className={clsx(styles.button, appearance && styles[appearance], className)}
        {...otherProps}
    >
        {children}
    </button>
);
