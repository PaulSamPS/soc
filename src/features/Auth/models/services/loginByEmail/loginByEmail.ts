import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { User, userActions } from '@/entities/User';
import { loginActions } from '../../slice/login.slice';

interface LoginByEmailProps {
    email: string;
    password: string;
}

interface LoginByEmailResult {
    user: User;
    token: string;
    message: string;
}

export const loginByEmail = createAsyncThunk<LoginByEmailResult, LoginByEmailProps, { rejectValue: string }>(
    'login/loginByEmail',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await axios.post<LoginByEmailResult>(
                'http://localhost:5000/auth/sign-in',
                { email, password },
                { withCredentials: true }
            );

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setUser(response.data.user));
            thunkAPI.dispatch(loginActions.setLoginComplete(response.data.message));
            localStorage.setItem('authToken', response.data.token);

            return response.data;
        } catch (e) {
            const err: AxiosError<{ message: string }> = e;
            return thunkAPI.rejectWithValue(err.response ? err.response.data.message : 'error');
        }
    }
);
