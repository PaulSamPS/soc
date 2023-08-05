import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { registrationActions } from '../../slice/registration.slice';

interface RegistrationProps {
    username: string;
    password: string;
    email: string;
}

interface RegistrationResult {
    message: string;
}

export const registration = createAsyncThunk<
    RegistrationResult,
    RegistrationProps,
    { rejectValue: string }
>('auth/registration', async ({ username, email, password }, thunkAPI) => {
    try {
        const response = await axios.post<RegistrationResult>(
            'http://localhost:5000/auth/sign-up',
            { username, email, password },
            { withCredentials: true }
        );

        if (!response.data) {
            throw new Error();
        }

        thunkAPI.dispatch(registrationActions.setRegistrationCompleted(response.data.message));

        return response.data;
    } catch (e) {
        const err = e as AxiosError<{ message: string }>;
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});
