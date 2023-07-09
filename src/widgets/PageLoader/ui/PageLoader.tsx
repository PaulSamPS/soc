import clsx from 'clsx';
import { Spinner } from 'shared/ui';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clsx(styles['page-loader'], className)}>
        <Spinner />
    </div>
);
