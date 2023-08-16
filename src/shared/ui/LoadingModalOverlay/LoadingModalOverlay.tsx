import clsx from 'clsx';
import { memo } from 'react';
import styles from './LoadingModalOverlay.module.scss';
import { Spinner } from '@/shared/ui/Spinner';
import { Portal } from '@/shared/ui/Portal';

interface LoadingModalOverlayProps {
    className?: string;
}

export const LoadingModalOverlay = memo(({ className }: LoadingModalOverlayProps) => (
    <Portal>
        <div className={clsx(styles['loading-modal-overlay'], className)}>
            <div className={styles.overlay}>
                <Spinner background='white' className={styles.spinner} />
            </div>
        </div>
    </Portal>
));
