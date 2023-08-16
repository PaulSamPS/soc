import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import { UserSchema } from '@/entities/User/model/types/userSchema';

const initialState: UserSchema = {
    user: {} as User,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
