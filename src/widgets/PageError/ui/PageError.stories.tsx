import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
