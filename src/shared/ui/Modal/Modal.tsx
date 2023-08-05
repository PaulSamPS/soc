'use client';

import clsx from 'clsx';
import React, { AllHTMLAttributes, MouseEvent, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.scss';
import { CloseIcon } from '@/shared/assets/icons';

interface ModalProps extends AllHTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
    onClose?: () => void;
    closeIcon?: boolean;
}

export const Modal = ({ className, children, isOpen, onClose, closeIcon = false }: ModalProps) => {
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        },
        [onClose]
    );

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const variantsModal = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    const variantsContent = {
        open: { opacity: 1, transform: 'scale(1)' },
        closed: { opacity: 0, transform: 'scale(0.2)' },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={clsx(styles.modal, isOpen && styles.opened, className)}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={variantsModal}
                    initial='closed'
                    exit='closed'
                    transition={{
                        duration: 0.3,
                    }}
                >
                    <div className={styles.overlay} onClick={onClose}>
                        <motion.div
                            className={styles.content}
                            onClick={onContentClick}
                            animate={isOpen ? 'open' : 'closed'}
                            variants={variantsContent}
                            initial='closed'
                            exit='closed'
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            {children}
                            {closeIcon && <CloseIcon className={styles['close-icon']} onClick={onClose} />}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
