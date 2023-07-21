import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const ThemeLight: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.PRIMARY,
    },
};

ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.PRIMARY,
    },
};

ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
