import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IProfile, IProfileEditProps } from '../types/profile';

export const updateProfileData =
    createAsyncThunk<IProfile, IProfileEditProps, ThunkConfig<string>>(
        'profile/updateProfileData',
        async (formData, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.apiAuth.post<IProfile>(
                    '/profile/update',
                    formData
                );

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e: any) {
                const err: AxiosError<{ message: string }> = e;
                return rejectWithValue(err.response ? err.response.data.message : 'error');
            }
        }
    );
