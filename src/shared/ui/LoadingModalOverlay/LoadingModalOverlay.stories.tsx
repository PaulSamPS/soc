import type { Meta, StoryObj } from '@storybook/react';
import { LoadingModalOverlay } from './LoadingModalOverlay';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof LoadingModalOverlay> = {
    title: 'shared/LoadingModalOverlay',
    component: LoadingModalOverlay,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoadingModalOverlay>;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
