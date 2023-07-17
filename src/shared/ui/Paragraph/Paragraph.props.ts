import * as React from 'react';
import { WeightSize } from '@/shared/types/common';

interface HasComponent {
    Component?: React.ElementType;
}

export interface ParagraphProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    weight?: WeightSize;
}
