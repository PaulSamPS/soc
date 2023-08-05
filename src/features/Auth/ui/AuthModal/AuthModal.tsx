import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { RegistrationLazy } from '../Registration/RegistrationLazy';
import { LoginLazy } from '../Login/LoginLazy';
import { Spinner } from '@/shared/ui/Spinner';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: () => void;
    isRegister: boolean;
}

export const AuthModal = ({ isOpen, onClose, onRegister, isRegister }: AuthModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose} closeIcon>
        {isRegister ? (
            <Suspense fallback={<Spinner />}>
                <LoginLazy onClose={onClose} onRegister={onRegister} />
            </Suspense>
        ) : (
            <Suspense fallback={<Spinner />}>
                <RegistrationLazy onRegister={onRegister} />
            </Suspense>
        )}
    </Modal>
);
