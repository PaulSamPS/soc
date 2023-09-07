import clsx from 'clsx';
import { memo } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form/dist/types/form';
import { IProfile, IProfileEditProps } from '../../model/types/profile';
import { ProfileCardBio } from '../ProfileCardBio/ProfileCardBio';
import { ProfileCardLocation } from '../ProfileCardLocation/ProfileCardLocation';
import { ProfileCardAvatar } from '../ProfileCardAvatar/ProfileCardAvatar';
import { Divider } from '@/shared/ui/Divider';

import styles from './ProfileCard.module.scss';
import {
    ProfileCardEditButtons
} from '@/entities/Profile/ui/ProfileCardEditButtons/ProfileCardEditButtons';
import {
    ProfileCardUploadAvatar
} from '@/entities/Profile/ui/ProfileCardUploadAvatar/ProfileCardUploadAvatar';
import { User } from '@/entities/User';

interface ProfileCardProps {
    className?: string
    readonly: boolean | undefined
    onEdit?: () => void
    setCountry?: (value: string | string[]) => void
    onCancelEdit?: () => void
    onSubmitAvatar?: (File: FileList) => void
    onSubmit?: (formData: IProfileEditProps) => void
    handleSubmit?: UseFormHandleSubmit<IProfileEditProps>
    resetCountry: boolean
    user: User | undefined
    data: IProfile | undefined
    isLoading: boolean | undefined
    register: UseFormRegister<IProfileEditProps>
    dataNotHasBeenChanged: boolean
}

export const ProfileCard = memo(({
    className,
    data,
    isLoading,
    onSubmitAvatar,
    register,
    readonly,
    setCountry,
    resetCountry,
    user,
    onEdit,
    handleSubmit,
    onCancelEdit,
    onSubmit,
    dataNotHasBeenChanged
}: ProfileCardProps) => (
    <div className={clsx(styles['profile-card'], className)}>
        <div className={styles.avatar}>
            <ProfileCardAvatar avatar={data?.avatar} user={user} />
            <ProfileCardUploadAvatar isLoading={isLoading} onSubmit={onSubmitAvatar!} />
        </div>
        <Divider className={styles.divider} />
        <div className={styles.data}>
            <ProfileCardBio
                register={register!}
                readonly={readonly}
                data={data}
            />
            <ProfileCardLocation
                register={register!}
                readonly={readonly}
                setCountry={setCountry!}
                resetCountry={resetCountry}
                data={data}
            />
            <ProfileCardEditButtons
                dataNotHasBeenChanged={dataNotHasBeenChanged}
                onEdit={onEdit!}
                onSubmit={onSubmit!}
                handleSubmit={handleSubmit!}
                onCancelEdit={onCancelEdit!}
                readonly={readonly}
            />
        </div>
    </div>
));
