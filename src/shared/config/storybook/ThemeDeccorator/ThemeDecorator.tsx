import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <body data-theme={theme}>
                <StoryComponent />
            </body>
        </ThemeProvider>
    );
