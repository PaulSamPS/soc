import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Dropdown } from './Dropdown';
import { Theme } from '@/app/providers/ThemeProvider';
import { ProfileIcon } from '@/shared/assets/icons';
import { DropdownItemList } from '@/shared/ui/Dropdown';
import { MenuItemsList } from '@/widgets/Navbar/models/constants/menuItemsList';
import { animate } from '@/widgets/Navbar/models/constants/animate';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const ThemeLight: Story = {
    args: {
        Icon: ProfileIcon,
        label: 'Username',
        variants: animate,
        animate: 'open',
        initial: 'closed',
        exit: 'closed',
        children: MenuItemsList.map((i) => (
            <DropdownItemList
                key={i.path}
                path={i.path}
                text={i.text}
                Icon={i.Icon}
                translation='menu'
            />
        ))
    },
};
ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        Icon: ProfileIcon,
        label: 'Username',
        variants: animate,
        animate: 'open',
        initial: 'closed',
        exit: 'closed',
        children: MenuItemsList.map((i) => (
            <DropdownItemList
                key={i.path}
                path={i.path}
                text={i.text}
                Icon={i.Icon}
                translation='menu'
            />
        ))
    },
};
ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
