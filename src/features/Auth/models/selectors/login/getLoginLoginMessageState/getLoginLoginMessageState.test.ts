import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginLoginMessageState } from './getLoginLoginMessageState';

describe('getLoginLoginMessageState.test', () => {
    test('should return login message', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                loginMessage: 'logged in'
            }
        };
        expect(getLoginLoginMessageState(state as StateSchema)).toEqual('logged in');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoginMessageState(state as StateSchema)).toEqual('');
    });
});
