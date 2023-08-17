import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator, StoreDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: undefined } })];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: { id: 0 } } })];
