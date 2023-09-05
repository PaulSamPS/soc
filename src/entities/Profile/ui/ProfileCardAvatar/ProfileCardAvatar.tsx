import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ProfileCardAvatar.module.scss';
import { Title } from '@/shared/ui/Title';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { Text } from '@/shared/ui/Text';
import { IProfile } from '../../model/types/profile';
import { User } from '@/entities/User';

interface ProfileCardAvatarProps extends Pick<IProfile, 'avatar'>{
    className?: string
    user: User | undefined
}

export const ProfileCardAvatar = memo(({ className, avatar, user }: ProfileCardAvatarProps) => {
    const { t } = useTranslation('profile');

    return (
        <div className={clsx(styles['profile-card-avatar'], className)}>
            <img
                className={styles.avatar}
                src={avatar ? `http://localhost:5000${avatar.url}` : 'assets/default-avatar.png'}
                alt={avatar?.name}
            />
            <div className={styles['user-info']}>
                <Title level={TitleLevel.h3}>{user?.username}</Title>
                <Text fontSize={LevelSize.l3}>{user?.email}</Text>
            </div>
        </div>
    );
});
