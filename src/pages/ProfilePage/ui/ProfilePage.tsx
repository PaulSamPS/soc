import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    return (
        <div className={clsx(styles['profile-page'], className)}>
            {t('Профиль')}
        </div>
    );
};

export default ProfilePage;
