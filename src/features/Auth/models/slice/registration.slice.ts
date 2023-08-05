import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationSchema } from '../types/registrationSchema';
import { registration } from '@/features/Auth/models/services/registration/registration';

const initialState: RegistrationSchema = {
    isLoading: false,
    error: undefined,
    message: undefined,
    registrationCompleted: undefined,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationCompleted: (state, action: PayloadAction<string>) => {
            state.registrationCompleted = action.payload;
            state.message = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
