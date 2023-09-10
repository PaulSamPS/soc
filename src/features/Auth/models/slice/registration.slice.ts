import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationSchema } from '../types/registrationSchema';
import { registrationAccount } from '../services/registration/registration';

const initialState: RegistrationSchema = {
    isLoading: false,
    error: undefined,
    message: undefined,
    registrationCompleted: false,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationCompleted: (state, action: PayloadAction<boolean>) => {
            state.registrationCompleted = action.payload;
            state.message = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationAccount.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registrationAccount.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(registrationAccount.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
