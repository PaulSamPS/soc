import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginLoginMessageState = (state: StateSchema) => state?.login?.loginMessage || '';
