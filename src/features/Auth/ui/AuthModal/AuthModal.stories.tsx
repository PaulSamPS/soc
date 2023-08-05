import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator, StoreDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import { AuthModal } from './AuthModal';

const meta: Meta<typeof AuthModal> = {
    title: 'features/AuthModal',
    component: AuthModal,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AuthModal>;

export const LoginLight: Story = { args: { isRegister: true } };
LoginLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ login: { isLoading: false } })];

export const LoginDark: Story = { args: { isRegister: true } };
LoginDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ login: { isLoading: false } })];

export const RegistrationLight: Story = { args: { isRegister: false } };
RegistrationLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ registration: { isLoading: false } })];

export const RegistrationDark: Story = { args: { isRegister: false } };
RegistrationDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ registration: { isLoading: false } })];

export const WarningLight: Story = { args: { isRegister: true } };
WarningLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ login: { isLoading: false, error: 'Неверный пароль' } })];

export const WarningDark: Story = { args: { isRegister: false } };
WarningDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ registration: { isLoading: false, error: 'Пользователь с таким email уже существует' } })];
