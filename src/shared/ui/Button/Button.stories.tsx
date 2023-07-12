import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Appearance, Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        appearance: Appearance,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        appearance: Appearance.PRIMARY,
        children: 'Test',
    },
};

export const Secondary: Story = {
    args: {
        appearance: Appearance.CLEAR,
        children: 'Test',
    },
};

export const SecondaryDark: Story = {
    args: {
        appearance: Appearance.CLEAR,
        children: 'Test',
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
