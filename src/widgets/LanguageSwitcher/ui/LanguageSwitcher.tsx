import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonAppearance } from '@/shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={clsx(styles['language-switcher'], className)}
            appearance={ButtonAppearance.CLEAR}
            onClick={toggle}
        >
            <span className={styles.lang}>{short ? t('Короткий язык') : t('Язык')}</span>
        </Button>
    );
};
