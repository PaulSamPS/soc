import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ProfilePage.module.scss';
import {
    DynamicModuleLoader, ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '@/entities/Profile';

const reducers: ReducerList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={clsx(styles['profile-page'], className)}>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
