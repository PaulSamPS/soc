import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, InputHTMLAttributes, memo } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
    nameInput?: string
}

const InputHookForm = forwardRef(
    ({ className, error, nameInput, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
        <div className={clsx(className, styles.wrapper, nameInput && styles['with-label'])}>
            {nameInput && <label htmlFor={nameInput} className={styles.label}>{nameInput}</label>}
            <input
                ref={ref}
                name={nameInput}
                className={clsx(styles.input, {
                    [styles.error]: error,
                })}
                {...props}
            />
            {error && <span className={styles['error-message']}>{error.message}</span>}
        </div>
    )
);

export const Input = memo(InputHookForm);
