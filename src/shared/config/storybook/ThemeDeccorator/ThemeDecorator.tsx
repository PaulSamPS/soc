import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className='app' id='app' data-theme={theme}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
