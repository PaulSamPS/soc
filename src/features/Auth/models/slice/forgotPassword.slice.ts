import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { forgotPassword } from '../services/forgotPassword/forgotPassword';
import { ForgotPasswordSchema } from '../types/forgotPassword';

const initialState: ForgotPasswordSchema = {
    message: undefined,
    isLoading: false,
    error: undefined
};

export const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {
        setForgotPasswordComplete: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(forgotPassword.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state,) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: forgotPasswordActions } = forgotPasswordSlice;
export const { reducer: forgotPasswordReducer } = forgotPasswordSlice;
