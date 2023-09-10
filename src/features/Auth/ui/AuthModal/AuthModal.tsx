import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '@/shared/ui/Modal';
import { RegistrationLazy } from '../Registration/RegistrationLazy';
import { LoginLazy } from '../Login/LoginLazy';
import styles from './AuthModal.module.scss';
import { Logo } from '@/shared/ui/Logo';
import { LoadingModalOverlay } from '@/shared/ui/LoadingModalOverlay';
import { ForgotPasswordLazy } from '@/features/Auth/ui/ForgotPassword/ForgotPasswordLazy';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: (value: boolean) => void;
    isRegister: boolean;
    isForgotPassword: boolean
    onForgotPassword: () => void
}

const show = {
    opacity: 1,
    x: 0,
    height: 'auto',
    transition: {
        ease: 'linear',
        duration: 0.5,
        x: { duration: 0.3 },
        opacity: { duration: 0 },
    }
};

const hide = {
    opacity: 0,
    x: '-100px',
    height: 0,
    transition: {
        ease: 'linear',
        duration: 0.5,
        x: { duration: 0.3 },
        opacity: { duration: 0 },
    }
};

export const AuthModal = ({
    isOpen,
    onClose,
    onRegister,
    isRegister,
    isForgotPassword,
    onForgotPassword
}: AuthModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose} closeIcon>
        <div className={styles.header}>
            <Logo />
        </div>
        <div className={styles['body-form']}>
            <Suspense fallback={<LoadingModalOverlay />}>
                <motion.div
                    className='box'
                    animate={isRegister && !isForgotPassword ? show : hide}
                    initial='show'
                    transition={{ duration: 0.3, type: 'spring' }}
                >
                    <LoginLazy
                        onClose={onClose}
                        onRegister={onRegister}
                        onForgotPassword={onForgotPassword}
                    />
                </motion.div>
            </Suspense>
            <Suspense fallback={<LoadingModalOverlay />}>
                <motion.div
                    className='box'
                    animate={!isRegister && !isForgotPassword ? show : hide}
                    initial='hide'
                >
                    <RegistrationLazy
                        onRegister={onRegister}
                    />
                </motion.div>
            </Suspense>
            <Suspense fallback={<LoadingModalOverlay />}>
                <motion.div
                    className='box'
                    animate={isForgotPassword ? show : hide}
                    initial='hide'
                >
                    <ForgotPasswordLazy
                        onForgotPassword={onForgotPassword}
                        onRegister={onRegister}
                    />
                </motion.div>
            </Suspense>
        </div>
    </Modal>
);
