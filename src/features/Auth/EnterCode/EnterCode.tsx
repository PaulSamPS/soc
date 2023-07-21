import React, { useContext, useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './EnterCodeDesktop.module.scss';
import { Title } from '@/shared/ui/Title/Title';
import { Text } from '@/shared/ui/Text/Text';
import { LevelSize, TitleLevel } from '@/shared/types/common';
import { Button, ButtonAppearance } from '@/shared/ui';
import { AuthStepsContext } from '@/features/Auth/context/AuthStepsContext';

const EnterCode = () => {
    const { setStep } = useContext(AuthStepsContext);
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const { t } = useTranslation('auth');

    const handleInputCode = (event: ChangeEvent<HTMLInputElement>): void => {
        const index: number = Number(event.target.getAttribute('id'));
        const { value } = event.target;
        setCode((prev) => {
            const newArr = [...prev];
            newArr[index] = value;
            return newArr;
        });
        if (event.target.nextSibling) {
            (event.target.nextSibling as HTMLInputElement).focus();
        }
    };

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
