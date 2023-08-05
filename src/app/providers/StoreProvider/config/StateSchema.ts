import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from '@/entities/Counter';
import { RegistrationSchema } from '@/features/Auth/models/types/registrationSchema';
import { LoginSchema } from '@/features/Auth';
import { UserSchema } from '@/entities/User/model/types/userSchema';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    login?: LoginSchema;
    registration?: RegistrationSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
