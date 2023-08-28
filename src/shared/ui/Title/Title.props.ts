import React from 'react';
import { TitleLevel, WeightSize } from '@/shared/types/common';

interface HasComponent {
    Component?: React.ElementType;
}

export interface TitleProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    weight?: WeightSize;
    level: TitleLevel;
    caps?: boolean;
}
