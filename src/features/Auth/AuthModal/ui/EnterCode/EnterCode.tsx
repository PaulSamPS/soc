import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './EnterCodeDesktop.module.scss';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { AuthStepsContext } from '../../lib/AuthStepsContext';
import { useEnterCode } from './hooks/useEnterCode';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { useValidateCode } from '@/features/Auth/AuthModal/ui/EnterCode/hooks/useValidateCode';

const EnterCode = () => {
    const { setStep } = useContext(AuthStepsContext);
    const { t } = useTranslation('auth');
    const { code, handleInputCode } = useEnterCode();

    return (
        <div className={styles['enter-code']}>
            <Title level={TitleLevel.h2}>{t('Код')}</Title>
            <Text fontSize={LevelSize.l2} className={styles.info}>
                {t('Введите последние 4 цифры звонившего номера')}
            </Text>
            <div className={styles.code}>
                {code.map((c, index) => (
                    <input
                        key={index}
                        maxLength={1}
                        id={String(index)}
                        placeholder='X'
                        autoComplete='off'
                        onChange={handleInputCode}
                        value={c}
                    />
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
