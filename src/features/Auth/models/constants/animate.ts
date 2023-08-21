import { MotionProps } from 'framer-motion';

export const animate = {
    variants: {
        closed: { y: -16,
            opacity: 0,
            transition: {
                delay: 0.15,
            } },
        open: { y: 0, opacity: 1 },
    },
    transition: { opacity: { duration: 0.2 },
        ype: 'spring',
        duration: 0.4,
        delayChildren: 0.4,
        staggerChildren: 0.1, },
} satisfies MotionProps;
