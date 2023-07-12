import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'shared/Spinner',
    component: Spinner,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
