import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return <div className={styles['about-page']}>{t('О сайте')}</div>;
};

export default AboutPage;
