import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Button, ButtonAppearance, ButtonSize } from './Button';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ThemeLight: Story = {
    args: {
        children: 'Test',
        appearance: ButtonAppearance.PRIMARY,
        size: ButtonSize.M,
    },
};
ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        children: 'Test',
        appearance: ButtonAppearance.PRIMARY,
        size: ButtonSize.M,
    },
};
ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
