import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { User, userActions } from '@/entities/User';
import { loginActions } from '../../slice/login.slice';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByEmailProps {
    email: string;
    password: string;
}

interface LoginByEmailResult {
    user: User;
    token: string;
    message: string;
}

export const loginByEmail =
    createAsyncThunk<LoginByEmailResult, LoginByEmailProps, ThunkConfig<string>>(
        'login/loginByEmail',
        async ({ email, password }, thunkAPI) => {
            const { extra, dispatch, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api.post<LoginByEmailResult>(
                    '/auth/sign-in',
                    { email, password },
                );

                if (!response.data) {
                    throw new Error();
                }

                dispatch(userActions.setUser(response.data.user));
                dispatch(loginActions.setLoginComplete(response.data.message));
                localStorage.setItem('authToken', response.data.token);
                extra.navigate('/');

                return response.data;
            } catch (e) {
                const err: AxiosError<{ message: string }> = e;
                return rejectWithValue(err.response ? err.response.data.message : 'error');
            }
        }
    );
