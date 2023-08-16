import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { registrationActions } from '../../slice/registration.slice';
import { ThunkConfig } from '@/app/providers/StoreProvider';

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
    ThunkConfig<string>
>('auth/registration', async ({ username, email, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<RegistrationResult>(
            'http://localhost:5000/auth/sign-up',
            { username, email, password },
        );

        if (!response.data) {
            throw new Error();
        }

        dispatch(registrationActions.setRegistrationCompleted(response.data.message));
        extra.navigate('/registration-success');

        return response.data;
    } catch (e) {
        const err = e as AxiosError<{ message: string }>;
        return rejectWithValue(err.response.data.message);
    }
});
