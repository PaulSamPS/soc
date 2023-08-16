import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationCompletedState = (state: StateSchema) =>
    state?.registration?.registrationCompleted || '';
