import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginErrorState } from './getLoginErrorState';

describe('getLoginErrorState.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error'
            }
        };
        expect(getLoginErrorState(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginErrorState(state as StateSchema)).toEqual(undefined);
    });
});
