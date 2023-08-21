import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownItem } from '@/shared/ui/Dropdown/ui/DropdownItem/DropdownItem';
import type { DropDownItemType } from '../../model/types/dropDownItem';
import { animate } from '../../model/constants/animate';

export const DropdownItemList = ({ text, Icon, path, translation, onNavigate }: DropDownItemType) => {
    const { t } = useTranslation(translation);

    return (
        <DropdownItem {...animate} key={path} onClick={() => onNavigate(path, t(text))}>
            <Icon style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            {t(text)}
        </DropdownItem>
    );
};
