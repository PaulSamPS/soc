import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationMessageState = (state: StateSchema) =>
    state?.registration?.message || '';
