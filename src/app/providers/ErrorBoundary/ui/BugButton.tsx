import { useEffect, useState } from 'react';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ButtonAppearance } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const throwErr = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button appearance={ButtonAppearance.PRIMARY} onClick={throwErr}>
            {t('Выбросить ошибку')}
        </Button>
    );
};
