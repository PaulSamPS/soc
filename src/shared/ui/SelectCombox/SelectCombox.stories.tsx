import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { SelectCombox } from './SelectCombox';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof SelectCombox> = {
    title: 'shared/SelectCombox',
    component: SelectCombox,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SelectCombox>;

export const ThemeLight: Story = {
    args: {
        defaultValue: 'Россия',
        label: 'Страна'
    },
};
ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        defaultValue: 'Россия',
        label: 'Страна'
    },
};
ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
