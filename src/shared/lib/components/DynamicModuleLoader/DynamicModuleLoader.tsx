import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducerList;
}

export const DynamicModuleLoader = ({ children, reducers }: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            Object.entries(reducers).forEach(([name]) => {
                store.reducerManager.remove(name as StateSchemaKey);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };
        // eslint-disable-next-line
    }, []);

    return <div>{children}</div>;
};
