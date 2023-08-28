import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IProfile } from '../types/profile';

export const fetchProfileData =
    createAsyncThunk<IProfile, void, ThunkConfig<string>>(
        'profile/fetchProfileData',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.apiAuth.get<IProfile>(
                    '/profile/get',
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
