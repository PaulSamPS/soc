import { StoryFn } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/Auth/models/slice/login.slice';
import { registrationReducer } from '@/features/Auth/models/slice/registration.slice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
    registration: registrationReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
        (StoryComponent: StoryFn) =>
            (
                <StoreProvider initialSate={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                    <StoryComponent />
                </StoreProvider>
            );
