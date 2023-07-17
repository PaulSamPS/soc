import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';
import { WeightSize } from '@/shared/types/common';

const meta: Meta<typeof Paragraph> = {
    title: 'shared/Paragraph',
    component: Paragraph,
    argTypes: {
        weight: WeightSize,
    },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Light: Story = {
    args: {
        children: 'Text',
        weight: WeightSize.w1,
        Component: 'p',
    },
};
