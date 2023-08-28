import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/Auth/models/slice/login.slice';
import { registrationReducer } from '@/features/Auth/models/slice/registration.slice';
import { profileReducer } from '@/entities/Profile';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
        (StoryComponent: StoryFn) =>
            (
                <StoreProvider initialSate={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                    <StoryComponent />
                </StoreProvider>
            );
