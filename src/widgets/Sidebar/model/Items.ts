import React from 'react';
import { RouterPath } from '@/shared/config/routerConfig';
import { AboutIcon, HomeIcon } from '@/shared/assets/icons';

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        Icon: HomeIcon,
        text: 'Главная'
    },
    {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: 'О сайте'
    }
];
