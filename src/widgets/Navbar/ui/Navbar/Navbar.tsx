import clsx from 'clsx';
import React, { AllHTMLAttributes, memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';
import { AuthModal } from '@/features/Auth';
import { Portal } from '@/shared/ui/Portal';
import { getUserState } from '@/entities/User/model/selectors/getLoginState';
import { NavbarAuth } from '@/widgets/Navbar/ui/NavbarAuth/NavbarAuth';
import { Logo } from '@/shared/ui/Logo';

interface NavbarProps extends AllHTMLAttributes<HTMLDivElement> {}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isRegister, setIsRegister] = useState<boolean>(true);
    const [resetPassword, setResetPassword] = useState<boolean>(false);

    const user = useSelector(getUserState);

    const onToggleRegister = useCallback((value: boolean) => {
        setIsRegister(value);
        setResetPassword(false);
    }, []);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
        setIsRegister(true);
        setResetPassword(false);
    }, []);

    const onResetPassword = useCallback(() => {
        setResetPassword(true);
    }, []);

    return (
        <div className={clsx(styles.navbar, className)}>
            <Logo />
            <NavbarAuth
                isLogin={!!user}
                username={user && user.username}
                onToggleModal={onToggleModal}
            />
            <Portal>
                <AuthModal
                    isRegister={isRegister}
                    onClose={onToggleModal}
                    isOpen={isAuthModal}
                    onRegister={onToggleRegister}
                    isForgotPassword={resetPassword}
                    onForgotPassword={onResetPassword}
                />
            </Portal>
        </div>
    );
});
