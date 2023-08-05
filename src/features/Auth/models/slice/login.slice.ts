import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByEmail } from '@/features/Auth/models/services/loginByEmail/loginByEmail';
import { LoginSchema } from '@/features/Auth';

const initialState: LoginSchema = {
    isLoading: false,
    error: undefined,
    message: undefined,
    loginMessage: undefined,
};

export const loginSlice = createSlice({
    name: 'loginByEmail',
    initialState,
    reducers: {
        setLoginComplete: (state, action: PayloadAction<string>) => {
            state.loginMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
