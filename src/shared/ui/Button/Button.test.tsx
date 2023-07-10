import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test primary theme', () => {
        render(<Button theme={ThemeButton.PRIMARY}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('primary');
        screen.debug();
    });
});
