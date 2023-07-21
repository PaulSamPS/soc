import clsx from 'clsx';
import React from 'react';
import { ThemeLightIcon, ThemeDarkIcon } from '@/shared/assets/icons';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, ButtonAppearance } from '@/shared/ui/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            appearance={ButtonAppearance.CLEAR}
            className={clsx(styles['theme-switcher'], className)}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
        </Button>
    );
};
