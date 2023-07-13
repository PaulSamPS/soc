import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonAppearance } from 'shared/ui/Button/Button';
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
            <Button appearance={ButtonAppearance.PRIMARY} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
