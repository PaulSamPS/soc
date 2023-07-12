import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFound } from './NotFound';

const meta: Meta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
