import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './Registration.module.scss';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';
import { Paragraph } from '@/shared/ui/Paragraph';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { LevelSize, TitleLevel, WeightSize } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input';
import { registrationAccount } from '../../models/services/registration/registration';
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';
import { registrationReducer } from '../../models/slice/registration.slice';
import {
    getRegistrationIsLoadingState,
    getRegistrationErrorState,
    getRegistrationMessageState,
    getRegistrationCompletedState } from '../../models/selectors/registration';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { animate } from '../../models/constants/animate';
import { Divider } from '@/shared/ui/Divider';
import { Variants } from '@/features/Auth/ui/Variants/Variants';

type IRegistrationFormProps = {
    username: string;
    email: string;
    password: string;
};

interface RegistrationProps {
    onRegister: (value: boolean) => void;
}

const initialReducers: ReducerList = {
    registration: registrationReducer,
};

const Registration = memo(({ onRegister }: RegistrationProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IRegistrationFormProps>({ mode: 'onChange', reValidateMode: 'onBlur' });
    const { t } = useTranslation('auth');

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getRegistrationIsLoadingState);
    const message = useSelector(getRegistrationMessageState);
    const error = useSelector(getRegistrationErrorState);
    const registrationCompleted = useSelector(getRegistrationCompletedState);

    const onSubmit = useCallback(async (formData: IRegistrationFormProps) => {
        await dispatch(registrationAccount(formData));
        reset();
    }, [dispatch, reset]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <motion.form className={styles.registration} onSubmit={handleSubmit(onSubmit)} {...animate}>
                {isLoading && <LoadingModalOverlay />}
                <div className={styles.header}>
                    <Divider />
                    <Title level={TitleLevel.h3}>{t('Регистрация')}</Title>
                    <Divider />
                </div>
                {registrationCompleted && (
                    <Text fontSize={LevelSize.l1} className={styles['message-info']}>
                        {registrationCompleted}
                    </Text>
                )}
                {message && (
                    <Text fontSize={LevelSize.l2} className={styles['message-info']}>
                        {message}
                    </Text>
                )}
                {error && (
                    <Text fontSize={LevelSize.l2} className={styles['message-info']}>
                        {error}
                    </Text>
                )}
                <Input
                    {...register('username', {
                        required: { value: true, message: `${t('Введите имя пользователя')}` },
                        minLength: { value: 3, message: `${t('Не короче 3 символов')}` },
                        maxLength: {
                            value: 15,
                            message: `${t('Имя не должно превышать 20 символов')}`,
                        },
                    })}
                    placeholder={t('Введите имя пользователя')}
                    type='text'
                    error={errors.username}
                />
                <Input
                    {...register('email', {
                        required: { value: true, message: `${t('Введите email')}` },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: `${t('Некорректный email')}`,
                        },
                    })}
                    type='text'
                    placeholder={t('Введите email')}
                    error={errors.email}
                />
                <Input
                    {...register('password', {
                        required: { value: true, message: `${t('Введите пароль')}` },
                        minLength: { value: 5, message: `${t('Пароль короче 5 символов')}` },
                    })}
                    type='password'
                    placeholder={t('Введите пароль')}
                    error={errors.password}
                />
                <Button
                    appearance={ButtonAppearance.PRIMARY}
                    className={styles['submit-btn']}
                    disabled={!isValid}
                    type='submit'
                >
                    {t('Зарегистрироваться')}
                </Button>
                <Paragraph weight={WeightSize.w1} className={styles.terms}>
                    {t('Пользовательское соглашение')}
                </Paragraph>
                <Variants
                    onRegister={onRegister}
                    login
                />
            </motion.form>
        </DynamicModuleLoader>
    );
});

export default Registration;

Registration.displayName = 'Registration';
