import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';
import { Appearance } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button appearance={Appearance.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test primary theme', () => {
        render(<Button appearance={Appearance.PRIMARY}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('primary');
        screen.debug();
    });
});
