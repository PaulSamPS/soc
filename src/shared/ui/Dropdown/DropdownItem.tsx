import React, { forwardRef, memo } from 'react';
import * as Ariakit from '@ariakit/react';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './DropdownItem.module.scss';

const Item = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
    (props, ref) => (
        <Ariakit.MenuItem
            ref={ref}
            className={styles['menu-item']}
            render={<motion.div {...props} />}
        />
    ),
);

export const DropdownItem = memo(Item);
