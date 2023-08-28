import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLoadingState } from './getLoginIsLoadingState';

describe('getLoginIsLoadingState.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true
            }
        };
        expect(getLoginIsLoadingState(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoadingState(state as StateSchema)).toEqual(false);
    });
});
