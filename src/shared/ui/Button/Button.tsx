import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

export enum ButtonAppearance {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    BG = 'bg',
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance: ButtonAppearance;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps & PropsWithChildren> = ({
    className,
    children,
    appearance,
    square,
    size = ButtonSize.M,
    ...otherProps
}) => {
    const classes: Record<string, boolean> = {
        [styles[appearance]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    };

    return (
        // eslint-disable-next-line react/button-has-type
        <button className={clsx(styles.button, classes, className)} {...otherProps}>
            {children}
        </button>
    );
};
