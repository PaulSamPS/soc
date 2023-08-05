import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginIsLoadingState = (state: StateSchema) => state?.login?.isLoading || false;
