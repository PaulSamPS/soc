import { RouterPath } from '@/shared/config/routerConfig';
import { LogoutIcon, ProfileIcon } from '@/shared/assets/icons';
import type { DropDownItemType } from '@/shared/ui/Dropdown';

export const MenuItemsList: Array<Pick<DropDownItemType, 'path' | 'Icon' | 'text'>> = [
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
