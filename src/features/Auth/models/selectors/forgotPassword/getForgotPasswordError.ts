import { StateSchema } from '@/app/providers/StoreProvider';

export const getForgotPasswordError = (state: StateSchema) => state?.forgotPassword?.error || false;
