import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';
import { ButtonAppearance } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button appearance={ButtonAppearance.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test primary theme', () => {
        render(<Button appearance={ButtonAppearance.PRIMARY}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('primary');
        screen.debug();
    });
});
