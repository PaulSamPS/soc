import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
