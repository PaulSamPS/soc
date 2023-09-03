import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import {
    DynamicModuleLoader, ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfileCard />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
