import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={clsx(styles['page-error'], className)}>
            <p>{t('Что-то пошло не так')}</p>
            <Button theme={ThemeButton.PRIMARY} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
