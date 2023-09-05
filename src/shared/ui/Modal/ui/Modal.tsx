import clsx from 'clsx';
import React, { AllHTMLAttributes, MouseEvent, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.scss';
import { CloseIcon } from '@/shared/assets/icons';
import { animateOverlay, animateModal, animateContent } from '../models/animate';

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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    onClick={onClose}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={animateOverlay}
                    initial='closed'
                    exit='closed'
                >
                    <motion.div
                        className={clsx(styles.modal, isOpen && styles.opened)}
                        {...animateModal}
                    >
                        <motion.div
                            className={clsx(styles.content, className)}
                            onClick={onContentClick}
                            {...animateContent}
                        >
                            {children}
                            {closeIcon && <CloseIcon className={styles['close-icon']} onClick={onClose} />}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
