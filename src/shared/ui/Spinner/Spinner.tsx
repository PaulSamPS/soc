import clsx from 'clsx';
import styles from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={clsx(styles.spinner, className)}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
