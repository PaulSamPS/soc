import * as React from 'react';
import cx from 'clsx';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.scss';
import { WeightSize } from '@/shared/types/common';

export const Paragraph = ({
    Component = 'p',
    weight = WeightSize.w3,
    children,
    className,
    ...restProps
}: ParagraphProps) => {
    const classes = cx(className, styles.paragraph, styles[weight]);

    return (
        <Component {...restProps} className={classes}>
            {children}
        </Component>
    );
};
