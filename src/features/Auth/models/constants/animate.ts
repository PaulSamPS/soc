import { MotionProps } from 'framer-motion';

export const animate = {
    variants: {
        closed: {
            opacity: 0,
            transition: {
                delay: 0.15,
            } },
        open: { opacity: 1 },
    },
    transition: { opacity: { duration: 0.2 },
        ype: 'spring',
        duration: 0.4,
        delayChildren: 0.4,
        staggerChildren: 0.1, },
} satisfies MotionProps;
