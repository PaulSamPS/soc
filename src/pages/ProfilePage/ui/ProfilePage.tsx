import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    DynamicModuleLoader, ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileActions, ProfileCard, profileReducer } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from '@/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData';
import { getProfileIsLoading } from '@/entities/Profile/model/selectors/getProfileIsLoading';
import { getUserState } from '@/entities/User/model/selectors/getLoginState';
import { getProfileReadOnly } from '@/entities/Profile/model/selectors/getProfileReadOnly';
import { IProfileEditProps } from '@/entities/Profile/model/types/profile';
import { updateProfileAvatar } from '@/entities/Profile/model/services/updateProfileAvatar';
import { checkFormData } from '@/entities/Profile/model/services/checkFormData';
import { updateProfileData } from '@/entities/Profile/model/services/updateProfileData';
import { checkDataHasBeenChanged } from '@/entities/Profile/model/services/checkDataHasBeenChanged';

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = memo(() => {
    const [country, setCountry] = useState<string | string[]>('');
    const [resetCountry, setResetCountry] = useState<boolean>(false);
    const [dataNotHasBeenChanged, setDataNotHasBeenChanged] = useState<boolean>(true);

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const user = useSelector(getUserState);
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { dirtyFields },
    } = useForm<IProfileEditProps>({ mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: useMemo(() => data, [data])
    });

    const onSubmitAvatar = useCallback((file: FileList) => {
        const formData = new FormData();
        formData.append('avatar', file[0]);
        dispatch(updateProfileAvatar(formData));
    }, [dispatch]);

    const onSubmit = useCallback((formData: IProfileEditProps) => {
        const newFormData = checkFormData({ formData, data, country });
        dispatch(profileActions.setReadonly(true));
        dispatch(updateProfileData(newFormData));
    }, [country, data, dispatch]);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
        setResetCountry(false);
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setCancelEdit());
        reset(data);
        setResetCountry(true);
    }, [data, dispatch, reset]);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useEffect(() => {
        checkDataHasBeenChanged({ dirtyFields, data, country, setDataNotHasBeenChanged });
    }, [
        dirtyFields,
        dirtyFields.firstname,
        dirtyFields.lastname,
        dirtyFields.country,
        dirtyFields.region,
        dirtyFields.city,
        dirtyFields.address,
        data,
        country
    ]);

    useEffect(() => {
        reset(data);
    }, [data, reset]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfilePageHeader />
            <ProfileCard
                register={register}
                data={data}
                isLoading={isLoading}
                user={user}
                readonly={readonly}
                setCountry={setCountry}
                resetCountry={resetCountry}
                handleSubmit={handleSubmit}
                onSubmitAvatar={onSubmitAvatar}
                onCancelEdit={onCancelEdit}
                onEdit={onEdit}
                onSubmit={onSubmit}
                dataNotHasBeenChanged={dataNotHasBeenChanged}
            />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
