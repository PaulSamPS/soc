import clsx from 'clsx';
import styles from './PageLoader.module.scss';
import { Spinner } from '@/shared/ui/Spinner';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clsx(styles['page-loader'], className)}>
        <Spinner />
    </div>
);
