import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem ducimusmaiores maxime officiis quia quos voluptatem. Alias, iste, nam?',
        isOpen: true,
    },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem ducimusmaiores maxime officiis quia quos voluptatem. Alias, iste, nam?',
        isOpen: true,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
