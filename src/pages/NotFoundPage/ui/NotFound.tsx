import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return <div className={clsx(styles['not-found'], className)}>{t('Страница не найдена')}</div>;
};
