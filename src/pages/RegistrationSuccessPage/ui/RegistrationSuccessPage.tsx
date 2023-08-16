import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './RegistrationSuccess.module.scss';
import { Text } from '@/shared/ui/Text';
import { LevelSize } from '@/shared/types/common';
import {
    DynamicModuleLoader,
    ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getRegistrationCompletedState, registrationReducer } from '@/features/Auth';

interface RegistrationSuccessProps {
    className?: string
}

const reducers: ReducerList = {
    registration: registrationReducer
};

const RegistrationSuccessPage = ({ className }: RegistrationSuccessProps) => {
    const message = useSelector(getRegistrationCompletedState);
    const { t } = useTranslation('registrationSuccess');
    const navigate = useNavigate();

    useEffect(() => {
        if (!message) {
            navigate('/');
        }
    }, [message, navigate]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={clsx(styles['registration-success'], className)}>
                <Text fontSize={LevelSize.l3}>{t('Активация аккаунта')}</Text>
            </div>
        </DynamicModuleLoader>
    );
};

export default RegistrationSuccessPage;
