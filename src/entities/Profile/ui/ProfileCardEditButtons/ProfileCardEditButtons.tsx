import { useTranslation } from 'react-i18next';
import { UseFormHandleSubmit } from 'react-hook-form/dist/types/form';
import { memo } from 'react';
import styles from './ProfileCardEditButtons.module.scss';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import { IProfileEditProps } from '../../model/types/profile';

interface ProfileCardEditButtonsProps {
    onEdit: () => void
    onSubmit: (formData: IProfileEditProps) => void
    handleSubmit: UseFormHandleSubmit<IProfileEditProps>;
    onCancelEdit: () => void
    readonly : boolean | undefined
}

export const ProfileCardEditButtons = memo(({
    onEdit,
    onSubmit,
    handleSubmit,
    onCancelEdit,
    readonly
}: ProfileCardEditButtonsProps) => {
    const { t } = useTranslation('profile');

    return (
        <div className={styles['profile-card-edit-buttons']}>
            {readonly ? (
                <Button
                    appearance={ButtonAppearance.PRIMARY}
                    className={styles.button}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <div className={styles['edit-profile']}>
                    <Button
                        appearance={ButtonAppearance.PRIMARY}
                        className={styles.button}
                        onClick={handleSubmit(onSubmit)}
                    >
                        {t('Сохранить')}
                    </Button>
                    <Button
                        appearance={ButtonAppearance.RED}
                        className={styles.button}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                </div>
            )}
        </div>
    );
});
