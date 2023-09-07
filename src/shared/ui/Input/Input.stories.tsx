import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const ThemeLight: Story = {
    args: { placeholder: 'Text' },
};
ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: { placeholder: 'Text' },
};
ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ThemeLightWithLabel: Story = {
    args: { placeholder: 'Text', nameInput: 'Name' },
};
ThemeLightWithLabel.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDarkWithLabel: Story = {
    args: { placeholder: 'Text', nameInput: 'Name' },
};
ThemeDarkWithLabel.decorators = [ThemeDecorator(Theme.DARK)];
