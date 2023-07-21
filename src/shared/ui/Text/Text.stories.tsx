import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { LevelSize, WeightSize } from '@/shared/types/common';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        weight: {
            description: 'Толщина шрифта',
            type: 'string',
            defaultValue: WeightSize.w1,
            options: WeightSize,
            control: {
                type: 'radio',
            },
        },
        fontSize: {
            description: 'Размер шрифта',
            type: 'string',
            defaultValue: LevelSize.l1,
            options: LevelSize,
            control: {
                type: 'radio',
            },
        },
        Component: {
            type: 'string',
            defaultValue: 'span',
            options: ['span', 'p', 'div'],
            control: {
                type: 'select',
                labels: {
                    Span: 'span',
                    P: 'p',
                    Div: 'div',
                },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const ThemeLight: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        fontSize: LevelSize.l1,
    },
};

ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        fontSize: LevelSize.l1,
    },
};

ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
