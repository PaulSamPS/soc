import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import styles from './ForgotPassword.module.scss';
import { Divider } from '@/shared/ui/Divider';
import { Title } from '@/shared/ui/Title';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { forgotPassword } from '../../models/services/forgotPassword/forgotPassword';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { Variants } from '@/features/Auth/ui/Variants/Variants';
import {
    DynamicModuleLoader,
    ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { forgotPasswordReducer } from '../../models/slice/forgotPassword.slice';
import {
    getForgotPasswordIsLoading,
    getForgotPasswordMessage
} from '@/features/Auth/models/selectors/forgotPassword';
import { Text } from '@/shared/ui/Text';
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';

interface ForgotPasswordProps {
    className?: string
    onRegister: (value: boolean) => void;
    onForgotPassword: () => void
}

type IForgotPasswordFormProps = {
    email: string;
};

const initialReducers: ReducerList = {
    forgotPassword: forgotPasswordReducer
};
const ForgotPassword = ({
    className,
    onForgotPassword,
    onRegister
}: ForgotPasswordProps) => {
    const { t } = useTranslation('auth');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getForgotPasswordIsLoading);
    const message = useSelector(getForgotPasswordMessage);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        resetField,
    } = useForm<IForgotPasswordFormProps>({ mode: 'onChange', reValidateMode: 'onBlur' });

    const onSubmit = useCallback(async (formData: IForgotPasswordFormProps): Promise<void> => {
        await dispatch(forgotPassword(formData));
        resetField('email');
    }, [dispatch, resetField]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            {isLoading && <LoadingModalOverlay />}
            <div className={clsx(styles['forgot-password'], className)}>
                <div className={styles.header}>
                    <Divider />
                    <Title level={TitleLevel.h3}>{t('Сбросить пароль')}</Title>
                    <Divider />
                </div>
                {message && <Text fontSize={LevelSize.l2} className={styles.message}>{message}</Text>}
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
                <Button
                    appearance={ButtonAppearance.PRIMARY}
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid}
                >
                    {t('Отправить')}
                </Button>
                <Variants
                    onRegister={onRegister}
                    onForgotPassword={onForgotPassword}
                    login
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ForgotPassword;
