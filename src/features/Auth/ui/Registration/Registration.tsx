import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './Registration.module.scss';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';
import { Paragraph } from '@/shared/ui/Paragraph';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { LevelSize, TitleLevel, WeightSize } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input';
import { registration } from '../../models/services/registration/registration';
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';
import { registrationReducer } from '../../models/slice/registration.slice';
import { getRegistrationIsLoadingState } from '../../models/selectors/registration/getRegistrationIsLoadingState/getRegistrationIsLoadingState';
import { getRegistrationMessageState } from '../../models/selectors/registration/getRegistrationMessageState/getRegistrationMessageState';
import { getRegistrationErrorState } from '../../models/selectors/registration/getRegistrationErrorState/getRegistrationErrorState';
import { getRegistrationCompletedState } from '../../models/selectors/registration/getRegistrationCompletedState/getRegistrationCompletedState';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

type IRegistrationFormProps = {
    username: string;
    email: string;
    password: string;
};

interface RegistrationProps {
    onRegister: () => void;
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

    const dispatch: any = useDispatch();
    const isLoading = useSelector(getRegistrationIsLoadingState);
    const message = useSelector(getRegistrationMessageState);
    const error = useSelector(getRegistrationErrorState);
    const registrationCompleted = useSelector(getRegistrationCompletedState);

    const onSubmit = async (formData: IRegistrationFormProps) => {
        await dispatch(registration(formData));
        reset();
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form className={styles.registration} onSubmit={handleSubmit(onSubmit)}>
                {isLoading && <LoadingModalOverlay />}
                <Title level={TitleLevel.h2}>{t('Регистрация')}</Title>
                <Text fontSize={LevelSize.l1} className={styles.subtitle}>
                    {t('Сможете быстро оформлять заказы')}
                </Text>
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
                <div className={styles.switcher}>
                    <Text fontSize={LevelSize.l1} className={styles.question}>
                        {t('Есть аккаунт ?')}
                    </Text>
                    <Text fontSize={LevelSize.l1} onClick={onRegister} className={clsx(styles.terms, styles.login)}>
                        {t('Войти')}
                    </Text>
                </div>
            </form>
        </DynamicModuleLoader>
    );
});

export default Registration;

Registration.displayName = 'Registration';
