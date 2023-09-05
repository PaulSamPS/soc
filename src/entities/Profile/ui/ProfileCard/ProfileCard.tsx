import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { memo, useCallback, useState } from 'react';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData';
import { profileActions } from '../../model/slice/profile.slice';
import { IProfileEditProps } from '../../model/types/profile';
import { checkFormData } from '../../model/services/checkFormData';
import { resetFieldValue } from '../../model/services/resetFieldValue';
import { ProfileCardBio } from '../ProfileCardBio/ProfileCardBio';
import { ProfileCardLocation } from '../ProfileCardLocation/ProfileCardLocation';
import { ProfileCardAvatar } from '../ProfileCardAvatar/ProfileCardAvatar';
import { getUserState } from '@/entities/User/model/selectors/getLoginState';
import { Divider } from '@/shared/ui/Divider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import styles from './ProfileCard.module.scss';
import {
    ProfileCardEditButtons
} from '@/entities/Profile/ui/ProfileCardEditButtons/ProfileCardEditButtons';
import { updateProfileData } from '@/entities/Profile/model/services/updateProfileData';
import {
    ProfileCardUploadAvatar
} from '@/entities/Profile/ui/ProfileCardUploadAvatar/ProfileCardUploadAvatar';
import { updateProfileAvatar } from '@/entities/Profile/model/services/updateProfileAvatar';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const [country, setCountry] = useState<string | string[]>('');
    const [resetCountry, setResetCountry] = useState<boolean>(false);

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const user = useSelector(getUserState);
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        resetField
    } = useForm<IProfileEditProps>({ mode: 'onChange', reValidateMode: 'onBlur' });

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
        resetFieldValue({ resetField, data });
        setResetCountry(true);
    }, [data, dispatch, resetField]);

    return (
        <div className={clsx(styles['profile-card'], className)}>
            <div className={styles.avatar}>
                <ProfileCardAvatar avatar={data?.avatar} user={user} />
                <ProfileCardUploadAvatar isLoading={isLoading} onSubmit={onSubmitAvatar} />
            </div>
            <Divider className={styles.divider} />
            <div className={styles.data}>
                <ProfileCardBio
                    register={register}
                    readonly={readonly}
                    data={data}
                />
                <ProfileCardLocation
                    register={register}
                    readonly={readonly}
                    setCountry={setCountry}
                    resetCountry={resetCountry}
                    data={data}
                />
                <ProfileCardEditButtons
                    onEdit={onEdit}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                    onCancelEdit={onCancelEdit}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
