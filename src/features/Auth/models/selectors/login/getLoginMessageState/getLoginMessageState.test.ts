import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginMessageState } from './getLoginMessageState';

describe('getLoginMessageState.test', () => {
    test('should return message', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                message: 'Message'
            }
        };
        expect(getLoginMessageState(state as StateSchema)).toEqual('Message');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginMessageState(state as StateSchema)).toEqual('');
    });
});
