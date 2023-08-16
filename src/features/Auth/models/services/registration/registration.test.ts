import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { registrationAccount } from '../registration/registration';
import { registrationActions } from '@/features/Auth/models/slice/registration.slice';

const userValue = { email: 'test@gmail.com', username: 'user', password: '12345' };

describe('registration.test', () => {
    it('success registration', async () => {
        const thunk = new TestAsyncThunk(registrationAccount);
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({ data: { message: 'success' } }));
        const result = await thunk.callThunk(userValue);

        setTimeout(
            () => expect(thunk.dispatch)
                .toHaveBeenCalledWith(
                    registrationActions.setRegistrationCompleted(true)
                ),
            100
        );

        expect(thunk.navigate).toHaveBeenCalledWith('/registration-success');
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ message: 'success' });
    });

    test('error registration', async () => {
        const thunk = new TestAsyncThunk(registrationAccount);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(userValue);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
