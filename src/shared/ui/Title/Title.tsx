import * as React from 'react';
import cx from 'clsx';
import { memo } from 'react';
import { TitleProps } from './Title.props';
import styles from './Title.module.scss';
import { TitleLevel } from '@/shared/types/common';

export const Title = memo(({
    children,
    weight,
    level = TitleLevel.h1,
    Component,
    caps,
    className,
    ...restProps
}: TitleProps) => {
    if (!Component) {
        Component = `h${level}` as React.ElementType;
    }

    const classes = cx(
        className,
        styles.title,
        styles[`level-${level}`],
        weight && styles[weight],
        caps && styles.uppercase
    );

    return (
        <Component {...restProps} className={classes}>
            {children}
        </Component>
    );
});
