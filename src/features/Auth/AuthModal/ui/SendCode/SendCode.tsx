import { PatternFormat } from 'react-number-format';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import styles from './SendCode.module.scss';
import { LevelSize, TitleLevel, WeightSize } from '@/shared/types/common';
import { useValidateNumber } from './hooks/useValidateNumber';
import { AuthStepsContext } from '../../lib/AuthStepsContext';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { Paragraph } from '@/shared/ui/Paragraph';

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
