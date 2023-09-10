import { StateSchema } from '@/app/providers/StoreProvider';

export const getForgotPasswordIsLoading = (state: StateSchema) => state?.forgotPassword?.isLoading || false;
