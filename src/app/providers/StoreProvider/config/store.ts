import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) =>
    configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: true,
        preloadedState: initialState,
    });
