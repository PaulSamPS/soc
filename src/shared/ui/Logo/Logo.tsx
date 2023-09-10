import clsx from 'clsx';
import styles from './Logo.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { TitleLevel } from '@/shared/types/common';
import { Title } from '@/shared/ui/Title';

interface LogoProps {
    className?: string
}

export const Logo = ({ className }: LogoProps) => (
    <div className={clsx(styles.logo, className)}>
        <LogoIcon />
        <Title level={TitleLevel.h3}>SOC</Title>
    </div>
);
