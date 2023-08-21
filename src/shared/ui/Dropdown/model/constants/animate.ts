import { MotionProps } from 'framer-motion';

export const animate = {
    variants: {
        closed: { x: -16, opacity: 0 },
        open: { x: 0, opacity: 1 },
    },
    transition: { opacity: { duration: 0.2 } },
} satisfies MotionProps;
