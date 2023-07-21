import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';
import { WeightSize } from '@/shared/types/common';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Paragraph> = {
    title: 'shared/Paragraph',
    component: Paragraph,
    argTypes: {
        weight: WeightSize,
    },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const ThemeLight: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        Component: 'p',
    },
};

ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        Component: 'p',
    },
};

ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
