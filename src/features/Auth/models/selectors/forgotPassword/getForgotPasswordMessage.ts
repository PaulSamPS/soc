import { StateSchema } from '@/app/providers/StoreProvider';

export const getForgotPasswordMessage = (state: StateSchema) => state?.forgotPassword?.message || false;
