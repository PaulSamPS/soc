import { loginByEmail } from '@/features/Auth/models/services/loginByEmail/loginByEmail';
import { userActions } from '@/entities/User';
import { loginActions } from '@/features/Auth/models/slice/login.slice';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const userValue = { id: 1, email: 'test@gmail.com', username: 'user' };

describe('loginByEmail.test', () => {
    it('success login', async () => {
        const thunk = new TestAsyncThunk(loginByEmail);
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ email: 'test@gmail.com', password: '12345' });

        setTimeout(() => expect(thunk.dispatch)
            .toHaveBeenCalledWith(userActions.setUser(userValue)), 100);
        setTimeout(() => expect(thunk.dispatch)
            .toHaveBeenCalledWith(loginActions.setLoginComplete('success')), 100);
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByEmail);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ email: 'test@gmail.com', password: '12345' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
