import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import styles from './ProfileCard.module.scss';
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData';
import { getProfileIsLoading } from '@/entities/Profile/model/selectors/getProfileIsLoading';
import { getProfileError } from '@/entities/Profile/model/selectors/getProfileError';
import { Title } from '@/shared/ui/Title';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { TitleLevel } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input';

interface ProfileCardProps {
    className?: string
}

interface IProfileEditProps {
    firstname: string
    lastname: string
    avatar: File
    country: string
    region: string
    city: string
    address: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const [isEditable, setIsEditable] = useState(false);

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IProfileEditProps>({ mode: 'onChange', reValidateMode: 'onBlur' });

    return (
        <div className={clsx(styles['profile-card'], className)}>
            <div className={styles.header}>
                <Title level={TitleLevel.h2}>{t('Профиль')}</Title>
                <Button
                    appearance={ButtonAppearance.PRIMARY}
                    onClick={() => setIsEditable(true)}
                >
                    {t('Изменить')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    {...register('firstname')}
                    type='text'
                    value={data?.firstname}
                    placeholder={t('Имя')}
                    error={errors.firstname}
                />
                <Input
                    {...register('lastname')}
                    type='text'
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                    error={errors.lastname}
                />
                <Input
                    {...register('country')}
                    type='text'
                    value={data?.country}
                    placeholder={t('Страна')}
                    error={errors.country}
                />
            </div>
        </div>
    );
};
