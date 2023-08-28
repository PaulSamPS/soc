import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { UserSchema, User, TokenAuthData } from '@/entities/User';

const initialState: UserSchema = {
    authData: undefined
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user: TokenAuthData =
                jwtDecode(localStorage.getItem('authToken')!);

            if (user) {
                state.authData = user.user;
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem('authToken');
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
