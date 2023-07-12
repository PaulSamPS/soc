import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDeccorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { withRouter } from 'storybook-addon-react-router-v6';

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), withRouter],
};
