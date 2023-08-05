import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';
import styles from './Spinner.module.scss';

interface SpinnerProps extends AllHTMLAttributes<HTMLSpanElement> {
    background?: string;
}

export const Spinner = ({
    background = 'var(--color)',
    className,
    'aria-label': ariaLabel = 'Загружается...',
}: SpinnerProps) => (
    <span role='status' aria-label={ariaLabel} className={clsx(styles.spinner, className)}>
        <div style={{ background }} />
        <div style={{ background }} />
        <div style={{ background }} />
        <div style={{ background }} />
    </span>
);
