import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialSate?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialSate }: StoreProviderProps) => {
    const store = createReduxStore(initialSate as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
