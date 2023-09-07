import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Divider> = {
    title: 'shared/Divider',
    component: Divider,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
