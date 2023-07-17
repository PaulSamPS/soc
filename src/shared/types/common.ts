import React from 'react';

export enum WeightSize {
    w1 = 'w1',
    w2 = 'w2',
    w3 = 'w3',
}

export enum LevelSize {
    l1 = 'l1',
    l2 = 'l2',
    l3 = 'l3',
}

export enum TitleSize {
    l1 = 'l1',
    l2 = 'l2',
    l3 = 'l3',
    l4 = 'l4',
    l5 = 'l5',
}

export enum TitleLevel {
    h1 = '1',
    h2 = '2',
    h3 = '3',
    h4 = '4',
    h5 = '5',
}

export interface HasComponent {
    Component?: React.ElementType;
}
