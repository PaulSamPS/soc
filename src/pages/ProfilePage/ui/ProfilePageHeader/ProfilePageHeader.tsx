import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ProfilePageHeader.module.scss';
import { Title } from '@/shared/ui/Title';
import { TitleLevel } from '@/shared/types/common';

export const ProfilePageHeader = memo(() => {
    const { t } = useTranslation('profile');

    return (
        <Title level={TitleLevel.h2} className={styles['profile-page-header']}>{t('Профиль')}</Title>
    );
});
