import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = memo(({ className }: NotFoundProps) => {
    const { t } = useTranslation('notFound');
    return <div className={clsx(styles['not-found'], className)}>{t('Страница не найдена')}</div>;
});
