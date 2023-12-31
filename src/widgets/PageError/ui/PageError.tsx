import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { AllHTMLAttributes, memo } from 'react';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import styles from './PageError.module.scss';

interface PageErrorProps extends AllHTMLAttributes<HTMLDivElement> {}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation('pageError');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={clsx(styles['page-error'], className)}>
            <p>{t('Что-то пошло не так')}</p>
            <Button appearance={ButtonAppearance.PRIMARY} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
