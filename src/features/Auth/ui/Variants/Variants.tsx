import { useTranslation } from 'react-i18next';
import styles from './Variants.module.scss';
import { Text } from '@/shared/ui/Text';
import { LevelSize } from '@/shared/types/common';

interface VariantsProps {
    onRegister: (value: boolean) => void;
    onForgotPassword?: () => void
    register?: boolean
    login?: boolean
    reset?: boolean
}

export const Variants = ({
    onForgotPassword,
    onRegister,
    reset = false,
    register,
    login
}: VariantsProps) => {
    const { t } = useTranslation('auth');

    return (
        <div className={styles.variants}>
            {register && (
                <div className={styles.bottom}>
                    <Text fontSize={LevelSize.l1} className={styles.question}>
                        {t('Нет аккаунта ?')}
                    </Text>
                    <Text fontSize={LevelSize.l1} onClick={() => onRegister(false)} className={styles.btn}>
                        {t('Зарегистрироваться')}
                    </Text>
                </div>
            )}
            {login && (
                <div className={styles.bottom}>
                    <Text fontSize={LevelSize.l1} className={styles.question}>
                        {t('Есть аккаунт ?') }
                    </Text>
                    <Text fontSize={LevelSize.l1} onClick={() => onRegister(true)} className={styles.btn}>
                        {t('Войти') }
                    </Text>
                </div>
            )}
            {reset && (
                <div className={styles.bottom}>
                    <Text fontSize={LevelSize.l1} className={styles.question}>
                        {t('Забыли пароль ?')}
                    </Text>
                    <Text
                        fontSize={LevelSize.l1}
                        onClick={onForgotPassword}
                        className={styles.btn}
                    >
                        {t('Сбросить')}
                    </Text>
                </div>
            )}
        </div>
    );
};
