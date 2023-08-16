import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationIsLoadingState = (state: StateSchema) =>
    state?.registration?.isLoading || false;
