import { MotionProps } from 'framer-motion';

export const animateOverlay = {
    open: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
            delayChildren: 0.2,
            staggerChildren: 0.05,
        },
    },
    closed: {
        opacity: 0,
        transition: {
            delay: 0.6,
        }
    },
};

export const animateModal = {
    variants: {
        open: {
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.05,
            },
        },
        closed: {
            opacity: 0,
            transition: {
                delay: 0.3,
            }
        },
    }
} satisfies MotionProps;

export const animateContent = {
    variants: {
        closed: { x: -16,
            opacity: 0,
            transition: {
                delay: 0.3,
            } },
        open: { x: 0, opacity: 1 },
    },
    transition: { opacity: { duration: 0.2 },
        type: 'spring',
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05, },
} satisfies MotionProps;
