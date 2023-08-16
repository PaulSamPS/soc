import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import styles from './MainPage.module.scss';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div className={styles['main-page']}>
            <BugButton />
            {t('Главная')}
            <Counter />
        </div>
    );
});

export default MainPage;
