import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { AuthStepsContext } from './lib/AuthStepsContext';
import { Spinner } from '@/shared/ui/Spinner';
import { useSteps } from './hooks/useSteps';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const { Step, contextValue } = useSteps();

    return (
        <Modal isOpen={isOpen} onClose={onClose} closeIcon lazy>
            <AuthStepsContext.Provider value={contextValue}>
                <Suspense fallback={<Spinner />}>
                    <Step />
                </Suspense>
            </AuthStepsContext.Provider>
        </Modal>
    );
};
