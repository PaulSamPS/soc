import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { LevelSize, WeightSize } from '@/shared/types/common';

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

export const Light: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        fontSize: LevelSize.l1,
    },
};
