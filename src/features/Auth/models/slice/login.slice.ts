import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    code: '',
    isLoading: false,
    phone: '',
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setUserCode: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
