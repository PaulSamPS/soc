import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
}
export const Input = forwardRef(
    ({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
        <div className={clsx(className, styles.wrapper)}>
            <input
                ref={ref}
                className={clsx(styles.input, {
                    [styles.error]: error,
                })}
                {...props}
            />
            {error && <span className={styles['error-message']}>{error.message}</span>}
        </div>
    )
);
