import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { forgotPasswordActions } from '../../slice/forgotPassword.slice';

interface ForgotPasswordProps {
    email: string;
}

interface ForgotPasswordResult {
    message: string;
}

export const forgotPassword =
    createAsyncThunk<ForgotPasswordResult, ForgotPasswordProps, ThunkConfig<string>>(
        'resetLink/forgotPassword',
        async ({ email }, thunkAPI) => {
            const { extra, dispatch, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api.post<ForgotPasswordResult>(
                    '/user/reset-password',
                    { email },
                );

                if (!response.data) {
                    throw new Error();
                }

                dispatch(forgotPasswordActions.setForgotPasswordComplete(response.data.message));

                return response.data;
            } catch (e) {
                const err: AxiosError<{ message: string }> = e as AxiosError<{ message: string }>;
                return rejectWithValue(err.response ? err.response.data.message : 'error');
            }
        }
    );
