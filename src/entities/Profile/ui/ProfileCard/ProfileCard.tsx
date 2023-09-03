import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { memo, useState } from 'react';
import styles from './ProfileCard.module.scss';
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData';
import { getProfileIsLoading } from '@/entities/Profile/model/selectors/getProfileIsLoading';
import { getProfileError } from '@/entities/Profile/model/selectors/getProfileError';
import { Title } from '@/shared/ui/Title';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input';
import { getUserState } from '@/entities/User/model/selectors/getLoginState';
import { Text } from '@/shared/ui/Text';
import { Divider } from '@/shared/ui/Divider';
import { SelectCombox } from '@/shared/ui/SelectCombox';

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

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [coutry, setCountry] = useState<string | string[]>('');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const user = useSelector(getUserState);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IProfileEditProps>({ mode: 'onChange', reValidateMode: 'onBlur' });

    const onSubmit = (formData: IProfileEditProps) => {
        console.log(coutry);
        if (typeof coutry === 'string') {
            formData.country = coutry;
        }
        console.log(formData);
    };

    return (
        <div className={clsx(styles['profile-card'], className)}>
            <Title level={TitleLevel.h2}>{t('Профиль')}</Title>
            <div className={styles['info-top']}>
                <img
                    className={styles.avatar}
                    src={data?.avatar ? `http://localhost:5000${data?.avatar.url}` : 'assets/default-avatar.png'}
                    alt={data?.avatar.name}
                />
                <div className={styles['user-info']}>
                    <Title level={TitleLevel.h3}>{user?.username}</Title>
                    <Text fontSize={LevelSize.l3}>{user?.email}</Text>
                </div>
                <Button
                    appearance={ButtonAppearance.PRIMARY}
                    onClick={() => setIsEditable(true)}
                >
                    {t('Загрузить фото')}
                </Button>
                <Button
                    appearance={ButtonAppearance.OUTLINE}
                    onClick={() => setIsEditable(true)}
                >
                    {t('Удалить')}
                </Button>
            </div>
            <Divider className={styles.divider} />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.data}>
                <div className={styles.bio}>
                    <Input
                        {...register('firstname')}
                        nameInput={t('Имя')}
                        type='text'
                        defaultValue={data?.firstname}
                        placeholder={t('Имя')}
                        error={errors.firstname}
                    />
                    <Input
                        {...register('lastname')}
                        nameInput={t('Фамилия')}
                        type='text'
                        defaultValue={data?.lastname}
                        placeholder={t('Фамилия')}
                        error={errors.lastname}
                    />
                </div>
                <div className={styles.location}>
                    <SelectCombox
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
                        error={errors.region}
                    />
                </div>
                <div className={styles.address}>
                    <Input
                        {...register('address')}
                        nameInput={t('Адрес')}
                        type='text'
                        defaultValue={data?.address}
                        placeholder={t('Адрес')}
                        error={errors.address}
                    />
                </div>
                <Button appearance={ButtonAppearance.PRIMARY} className={styles.submit}>{t('Сохранить')}</Button>
            </form>
        </div>
    );
});
