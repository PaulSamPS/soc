import { memo, useEffect } from 'react';
import {
    DynamicModuleLoader, ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from '@/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfilePageHeader />
            <ProfileCard />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
