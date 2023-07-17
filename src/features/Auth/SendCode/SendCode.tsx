import { PatternFormat } from 'react-number-format';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import styles from './SendCode.module.scss';
import { Title } from '@/shared/ui/Title/Title';
import { LevelSize, TitleLevel, WeightSize } from '@/shared/types/common';
import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonAppearance } from '@/shared/ui';
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph';
import { useValidateNumber } from '../AuthModal/hooks/useValidateNumber';
import { AuthStepsContext } from '../context/AuthStepsContext';

const SendCode = () => {
    const { t } = useTranslation('auth');
    const { onChange, isValid, value } = useValidateNumber();
    const { nextStep } = useContext(AuthStepsContext);

    return (
        <div className={styles['send-code']}>
            <Title level={TitleLevel.h2}>{t('Вход в аккаунт')}</Title>
            <Text fontSize={LevelSize.l1} className={styles.subtitle}>
                {t('Сможете быстро оформлять заказы')}
            </Text>
            <div className={styles['phone-input']}>
                <PatternFormat
                    name='phone'
                    format='+7 (###) ###-##-##'
                    mask='_'
                    placeholder='+7 (123) 456-78-90'
                    value={value}
                    autoComplete='off'
                    onChange={onChange}
                />
                <label htmlFor='phone'>{t('Номер телефона')}</label>
            </div>
            <Button
                appearance={ButtonAppearance.PRIMARY}
                disabled={isValid}
                className={styles['submit-btn']}
                onClick={nextStep}
            >
                {t('Отправить код')}
            </Button>
            <Paragraph weight={WeightSize.w1} className={styles.terms}>
                {t('Пользовательское соглашение')}
            </Paragraph>
        </div>
    );
};

export default SendCode;
