import { FC, SVGProps } from 'react';
import { RouterPath } from '@/shared/config/routerConfig';
import { LogoutIcon, ProfileIcon } from '@/shared/assets/icons';

export interface DropDownItemType {
    path: string
    text: string
    Icon: FC<SVGProps<SVGSVGElement>>
}

export const DropdownItemsList: DropDownItemType[] = [
    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: 'Профиль'
    },
    {
        path: RouterPath.main,
        Icon: LogoutIcon,
        text: 'Выйти'
    }
];
