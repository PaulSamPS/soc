import { useTranslation } from 'react-i18next';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { memo } from 'react';
import styles from './ProfileCardLocation.module.scss';
import { SelectCombox } from '@/shared/ui/SelectCombox';
import { Input } from '@/shared/ui/Input';
import { IProfile, IProfileEditProps } from '../../model/types/profile';

interface ProfileCardLocationProps {
    register: UseFormRegister<IProfileEditProps>
    readonly :boolean | undefined
    setCountry: (value: string | string[]) => void
    resetCountry: boolean
    data: IProfile | undefined
}

export const ProfileCardLocation = memo(({
    register,
    readonly,
    data,
    setCountry,
    resetCountry
}: ProfileCardLocationProps) => {
    const { t } = useTranslation('profile');

    return (
        <div className={styles['profile-card-location']}>
            <div className={styles.column}>
                <SelectCombox
                    reset={resetCountry}
                    readonly={readonly!}
                    setValue={setCountry}
                    defaultValue={data?.country!}
                    label='Страна'
                    translate='profile'
                />
                <Input
                    {...register('region')}
                    nameInput={t('Регион')}
                    type='text'
                    defaultValue={data?.region}
                    placeholder={t('Регион')}
                    readOnly={readonly}
                />
            </div>
            <div className={styles.column}>
                <Input
                    {...register('city')}
                    nameInput={t('Город')}
                    type='text'
                    defaultValue={data?.city}
                    placeholder={t('Город')}
                    readOnly={readonly}
                />
                <Input
                    {...register('address')}
                    nameInput={t('Адрес')}
                    type='text'
                    defaultValue={data?.address}
                    placeholder={t('Адрес')}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
});
