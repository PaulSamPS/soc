import clsx from 'clsx';
import { memo } from 'react';
import styles from './PageLoader.module.scss';
import { Spinner } from '@/shared/ui/Spinner';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={clsx(styles['page-loader'], className)}>
        <Spinner />
    </div>
));
