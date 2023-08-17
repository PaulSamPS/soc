import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import styles from './LanguageSwitcher.module.scss';
import { EnIcon, RuIcon } from '@/shared/assets/icons';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation('languageSwitcher');

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const flagLanguage = i18n.language === 'ru' ? <RuIcon /> : <EnIcon />;

    return (
        <Button
            className={clsx(styles['language-switcher'], className)}
            appearance={ButtonAppearance.CLEAR}
            onClick={toggle}
        >
            <span className={styles.lang}>{short ? flagLanguage : t('Язык')}</span>
        </Button>
    );
});
