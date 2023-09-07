import clsx from 'clsx';
import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    size?: number
    src?: string
    alt?: string
}

export const Avatar = ({ className, size, src, alt }: AvatarProps) => {
    const style = useMemo<CSSProperties>(() => ({
        with: size || 150,
        height: size || 150
    }), [size]);

    return (
        <div className={clsx(styles.avatar, className)}>
            <img
                className={styles.avatar}
                style={style}
                src={src || 'assets/default-avatar.png'}
                alt={alt}
            />
        </div>
    );
};
