import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationErrorState = (state: StateSchema) => state?.registration?.error;
