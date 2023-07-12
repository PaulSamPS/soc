import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PRIMARY: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.SECONDARY,
    },
};
