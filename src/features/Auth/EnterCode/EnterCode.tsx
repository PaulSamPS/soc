import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './EnterCodeDesktop.module.scss';
import { Title } from '@/shared/ui/Title/Title';
import { Text } from '@/shared/ui/Text/Text';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { Button, ButtonAppearance } from '@/shared/ui';
import { AuthStepsContext } from '@/features/Auth/context/AuthStepsContext';

const EnterCode = () => {
    const { setStep } = useContext(AuthStepsContext);
    const [codes] = useState<string[]>(['', '', '', '']);
    const { t } = useTranslation('auth');

    return (
        <div className={styles['enter-code']}>
            <Title level={TitleLevel.h2}>{t('Код')}</Title>
            <Text fontSize={LevelSize.l2} className={styles.info}>
                {t('Введите последние 4 цифры звонившего номера')}
            </Text>
            <div className={styles.code}>
                {codes.map((code, index) => (
                    <input key={index} maxLength={1} placeholder='X' autoComplete='off' />
                ))}
            </div>
            <Button appearance={ButtonAppearance.PRIMARY}>{t('Вход в аккаунт')}</Button>
            <div className={styles['resend-code']}>
                <Text className={styles.text} fontSize={LevelSize.l2}>
                    {t('Получить новый код')}
                </Text>
                <Text className={styles.text} fontSize={LevelSize.l2} onClick={() => setStep(0)}>
                    {t('Ввести другой телефон')}
                </Text>
            </div>
        </div>
    );
};

export default EnterCode;
