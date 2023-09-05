import { useTranslation } from 'react-i18next';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { memo } from 'react';
import styles from './ProfileCardBio.module.scss';
import { Input } from '@/shared/ui/Input';
import { IProfile, IProfileEditProps } from '../../model/types/profile';

interface ProfileCardBioProps {
    register: UseFormRegister<IProfileEditProps>
    readonly :boolean | undefined
    data: IProfile | undefined
}

export const ProfileCardBio = memo(({ register, data, readonly }: ProfileCardBioProps) => {
    const { t } = useTranslation('profile');

    return (
        <div className={styles['profile-card-bio']}>
            <Input
                {...register('firstname')}
                nameInput={t('Имя')}
                type='text'
                defaultValue={data?.firstname}
                placeholder={t('Имя')}
                readOnly={readonly}
            />
            <Input
                {...register('lastname')}
                nameInput={t('Фамилия')}
                type='text'
                defaultValue={data?.lastname}
                placeholder={t('Фамилия')}
                readOnly={readonly}
            />
        </div>
    );
});
