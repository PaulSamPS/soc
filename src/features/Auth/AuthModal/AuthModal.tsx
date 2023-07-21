import { ComponentType, Suspense, useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import styles from './AuthModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import CloseIcon from '@/shared/assets/icons/close.svg';
import { SendCodeLazy } from '../SendCode/SendCodeLazy';
import { EnterCodeLazy } from '../EnterCode/EnterCodeLazy';
import { AuthStepsContext } from '@/features/Auth/context/AuthStepsContext';
import { Spinner } from '@/shared/ui';

interface AuthModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

type StepComponentType = {
    [key: number]: ComponentType;
};

export const AuthModal = ({ isOpen, onClose, className }: AuthModalProps) => {
    const [step, setStep] = useState<number>(0);
    const [phone, setPhone] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    const nextStep = useCallback(() => {
        setStep((prev) => prev + 1);
    }, []);

    const contextValue = useMemo(
        () => ({
            step,
            setStep,
            nextStep,
            setPhone,
            phone,
            setUserId,
            userId,
        }),
        [step, setStep, nextStep, setPhone, phone, setUserId, userId]
    );

    const stepComponents: StepComponentType = {
        0: SendCodeLazy,
        1: EnterCodeLazy,
    };

    const Step = stepComponents[step];

    return (
        <Modal
            className={clsx(styles['auth-modal'], className)}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <AuthStepsContext.Provider value={contextValue}>
                <Suspense fallback={<Spinner />}>
                    <Step />
                </Suspense>
            </AuthStepsContext.Provider>
            <CloseIcon className={styles['close-icon']} onClick={onClose} />
        </Modal>
    );
};
