import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { DropdownItem } from '@/shared/ui/Dropdown/ui/DropdownItem/DropdownItem';
import type { DropDownItemType } from '../../model/types/dropDownItem';
import { animate } from '../../model/constants/animate';

export const DropdownItemList = ({ text, Icon, path, translation, onNavigate }: DropDownItemType) => {
    const { t } = useTranslation(translation);
    const { pathname } = useLocation();

    return (
        <DropdownItem
            key={path}
            {...animate}
            aria-disabled={path === pathname && path !== '/'}
            onClick={() => (onNavigate && path !== pathname ? onNavigate(path, t(text)) : undefined)}
        >
            <Icon style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            {t(text)}
        </DropdownItem>
    );
};
