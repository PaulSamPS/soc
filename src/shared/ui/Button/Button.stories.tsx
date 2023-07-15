import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonAppearance, ButtonSize } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        appearance: ButtonAppearance,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        appearance: ButtonAppearance.PRIMARY,
        children: 'Test',
    },
};

export const Secondary: Story = {
    args: {
        appearance: ButtonAppearance.CLEAR,
        children: 'Test',
    },
};

export const SecondaryDark: Story = {
    args: {
        appearance: ButtonAppearance.CLEAR,
        children: 'Test',
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BgLight: Story = {
    args: {
        appearance: ButtonAppearance.BG,
        children: 'Test',
    },
};
BgLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BgDark: Story = {
    args: {
        appearance: ButtonAppearance.BG,
        children: 'Test',
    },
};
BgDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square: Story = {
    args: {
        appearance: ButtonAppearance.BG,
        children: '>',
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareL: Story = {
    args: {
        appearance: ButtonAppearance.BG,
        children: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXl: Story = {
    args: {
        appearance: ButtonAppearance.BG,
        children: '>',
        square: true,
        size: ButtonSize.XL,
    },
};
