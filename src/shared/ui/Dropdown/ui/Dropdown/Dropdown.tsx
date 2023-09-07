import * as Ariakit from '@ariakit/react';
import React, { ComponentPropsWithoutRef, FC, forwardRef, ReactNode, SVGProps } from 'react';
import type { MotionProps } from 'framer-motion';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import styles from './Dropdown.module.scss';

export interface MenuProps extends ComponentPropsWithoutRef<'div'> {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    label: ReactNode;
    disabled?: boolean;
    animate?: MotionProps['animate'];
    transition?: MotionProps['transition'];
    variants?: MotionProps['variants'];
    initial?: MotionProps['initial'];
    exit?: MotionProps['exit'];
    Icon?: FC<SVGProps<SVGSVGElement>>
}
export const Dropdown = forwardRef<HTMLDivElement, MenuProps>((
    {
        open,
        setOpen,
        label,
        children,
        animate,
        transition,
        variants,
        initial,
        exit,
        Icon,
        ...props
    },
    ref,
) => {
    const menu = Ariakit.useMenuStore({ open, setOpen });
    const currentPlacement = menu.useState('currentPlacement');
    const mounted = menu.useState('mounted');

    return (
        <MotionConfig reducedMotion='user'>
            <Ariakit.MenuButton store={menu} ref={ref} className={styles.button} {...props}>
                {Icon && <Icon />}
                {label}
            </Ariakit.MenuButton>
            <AnimatePresence>
                {mounted && (
                    <Ariakit.Menu
                        store={menu}
                        alwaysVisible
                        className={styles.menu}
                        data-placement={currentPlacement}
                        render={(
                            <motion.div
                                initial={initial}
                                exit={exit}
                                animate={animate}
                                variants={variants}
                                transition={transition}
                            />
                        )}
                    >
                        <Ariakit.MenuArrow className={styles['menu-arrow']} />
                        {children}
                    </Ariakit.Menu>
                )}
            </AnimatePresence>
        </MotionConfig>
    );
});
