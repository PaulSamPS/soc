import clsx from 'clsx';
import { TextProps } from './Text.props';
import styles from './Text.module.scss';
import { LevelSize, WeightSize } from '@/shared/types/common';

export const Text = ({
    children,
    weight = WeightSize.w3,
    fontSize = LevelSize.l3,
    Component = 'span',
    error,
    className,
    ...restProps
}: TextProps) => {
    const classes = clsx(
        className,
        styles.text,
        styles[weight],
        styles[fontSize],
        error && styles.error
    );

    return (
        <Component {...restProps} className={classes}>
            {children}
        </Component>
    );
};
