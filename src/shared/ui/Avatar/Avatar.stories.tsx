import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Avatar } from './Avatar';
import { Theme } from '@/app/providers/ThemeProvider';
import DefaultAvatar from './default-avatar.png';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const ThemeLight: Story = {
    args: {
        size: 150,
        src: DefaultAvatar,
        alt: 'avatar'
    },
};
ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        size: 150,
        src: DefaultAvatar,
        alt: 'avatar'
    },
};
ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
