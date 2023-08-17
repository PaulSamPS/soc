import React, { forwardRef } from 'react';
import * as Ariakit from '@ariakit/react';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './DropdownItem.module.scss';

export const DropdownItem = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
    (props, ref) => (
        <Ariakit.MenuItem
            ref={ref}
            className={styles['menu-item']}
            render={<motion.div {...props} />}
        />
    ),
);
