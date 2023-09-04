import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
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
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';
import { Title } from '@/shared/ui/Title';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input';
import { getUserState } from '@/entities/User/model/selectors/getLoginState';
import { Text } from '@/shared/ui/Text';
import { Divider } from '@/shared/ui/Divider';
import { SelectCombox } from '@/shared/ui/SelectCombox';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const [country, setCountry] = useState<string | string[]>('');
    const [resetCountry, setResetCountry] = useState<boolean>(false);

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const user = useSelector(getUserState);
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        resetField
    } = useForm<IProfileEditProps>({ mode: 'onChange', reValidateMode: 'onBlur' });

    const onSubmit = useCallback((formData: IProfileEditProps) => {
        const newFormData = checkFormData({ formData, data, country });
        dispatch(profileActions.setReadonly(true));
        console.log(newFormData);
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
            {isLoading && <LoadingModalOverlay />}
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
                >
                    {t('Загрузить фото')}
                </Button>
                <Button
                    appearance={ButtonAppearance.OUTLINE}
                >
                    {t('Удалить')}
                </Button>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.data}>
                <div className={styles.bio}>
                    <Input
                        {...register('firstname')}
                        nameInput={t('Имя')}
                        type='text'
                        defaultValue={data?.firstname}
                        placeholder={t('Имя')}
                        readOnly={readOnly}
                    />
                    <Input
                        {...register('lastname')}
                        nameInput={t('Фамилия')}
                        type='text'
                        defaultValue={data?.lastname}
                        placeholder={t('Фамилия')}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.location}>
                    <SelectCombox
                        reset={resetCountry}
                        readonly={readOnly!}
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
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.location}>
                    <Input
                        {...register('city')}
                        nameInput={t('Город')}
                        type='text'
                        defaultValue={data?.city}
                        placeholder={t('Город')}
                        readOnly={readOnly}
                    />
                    <Input
                        {...register('address')}
                        nameInput={t('Адрес')}
                        type='text'
                        defaultValue={data?.address}
                        placeholder={t('Адрес')}
                        readOnly={readOnly}
                    />
                </div>
                {readOnly ? (
                    <Button
                        appearance={ButtonAppearance.PRIMARY}
                        className={styles['button-bottom']}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <div className={styles['edit-profile']}>
                        <Button
                            appearance={ButtonAppearance.PRIMARY}
                            className={styles['button-bottom']}
                            onClick={handleSubmit(onSubmit)}
                        >
                            {t('Сохранить')}
                        </Button>
                        <Button
                            appearance={ButtonAppearance.OUTLINE}
                            className={styles['button-bottom']}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
});
