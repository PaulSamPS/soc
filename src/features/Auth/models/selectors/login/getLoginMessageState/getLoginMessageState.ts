import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginMessageState = (state: StateSchema) => state?.login?.message || '';
