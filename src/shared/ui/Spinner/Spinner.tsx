import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';
import styles from './Spinner.module.scss';

interface SpinnerProps extends AllHTMLAttributes<HTMLSpanElement> {}

export const Spinner = ({
    className,
    'aria-label': ariaLabel = 'Загружается...',
}: SpinnerProps) => (
    <span role='status' aria-label={ariaLabel} className={clsx(styles.spinner, className)}>
        <div />
        <div />
        <div />
        <div />
    </span>
);
