import React from 'react';
import { LevelSize, WeightSize } from '@/shared/types/common';

interface HasComponent {
    Component?: React.ElementType;
}

export interface TextProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    weight?: WeightSize;
    fontSize?: LevelSize;
    error?: boolean;
}
