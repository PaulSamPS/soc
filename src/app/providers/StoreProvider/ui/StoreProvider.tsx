import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialSate?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialSate, asyncReducers }: StoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxStore(
        initialSate as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    );

    return <Provider store={store}>{children}</Provider>;
};
