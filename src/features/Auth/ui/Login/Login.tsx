import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './Login.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { Title } from '@/shared/ui/Title';
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';
import { loginByEmail } from '@/features/Auth/models/services/loginByEmail/loginByEmail';
import { loginReducer } from '../../models/slice/login.slice';
import {
    getLoginErrorState,
    getLoginIsLoadingState,
    getLoginLoginMessageState,
} from '../../models/selectors/login';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { animate } from '../../models/constants/animate';

interface LoginProps {
    className?: string;
    onRegister: () => void;
    onClose: () => void;
}

type LoginFormProps = {
    email: string;
    password: string;
};

const initialReducers: ReducerList = {
    login: loginReducer,
};

const Login = memo(({ className, onRegister, onClose }: LoginProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('auth');

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<LoginFormProps>({ mode: 'onChange', reValidateMode: 'onBlur' });
    const error = useSelector(getLoginErrorState);
    const loginMessage = useSelector(getLoginLoginMessageState);
    const isLoading = useSelector(getLoginIsLoadingState);
    const onSubmit = async (formData: LoginFormProps) => {
        await dispatch(loginByEmail(formData));
        reset();
    };

    useEffect(() => {
        if (loginMessage) {
            onClose();
        }
    }, [loginMessage, onClose]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <motion.form className={clsx(styles.login, className)} onSubmit={handleSubmit(onSubmit)} {...animate}>
                {isLoading && <LoadingModalOverlay />}
                <Title level={TitleLevel.h2}>{t('Вход в аккаунт')}</Title>
                {error && (
                    <Text fontSize={LevelSize.l2} className={styles['message-info']}>
                        {error}
                    </Text>
                )}
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
                    {t('Войти')}
                </Button>
                <div className={styles.switcher}>
                    <Text fontSize={LevelSize.l1} className={styles.question}>
                        {t('Нет аккаунта ?')}
                    </Text>
                    <Text fontSize={LevelSize.l1} onClick={onRegister} className={clsx(styles.terms, styles.register)}>
                        {t('Зарегистрироваться')}
                    </Text>
                </div>
            </motion.form>
        </DynamicModuleLoader>
    );
});

export default Login;
