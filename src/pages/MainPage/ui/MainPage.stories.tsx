import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
