import { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';
import { TitleLevel, WeightSize } from '@/shared/types/common';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Title> = {
    title: 'shared/Title',
    component: Title,
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
        level: {
            description: 'Уровень тега h',
            type: 'string',
            defaultValue: TitleLevel.h1,
            options: TitleLevel,
            control: {
                type: 'radio',
            },
        },
        Component: {
            description: 'Компонент который будет рендериться',
            type: 'string',
            defaultValue: 'h1',
            options: ['h1', 'h2', 'h3', 'h4', 'h5'],
            control: {
                type: 'select',
                labels: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                },
            },
        },
        children: {
            description: 'Текст',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const ThemeLight: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        level: TitleLevel.h1,
    },
};

ThemeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeDark: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        level: TitleLevel.h1,
    },
};

ThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
