import { UseFormResetField } from 'react-hook-form/dist/types/form';
import { IProfile, IProfileEditProps } from '../types/profile';

interface ResetFieldValueProps {
    resetField: UseFormResetField<IProfileEditProps>;
    data: IProfile | undefined
}

export const resetFieldValue = ({ resetField, data }: ResetFieldValueProps): void => {
    resetField('firstname', { defaultValue: data?.firstname });
    resetField('lastname', { defaultValue: data?.lastname });
    resetField('country', { defaultValue: data?.country });
    resetField('region', { defaultValue: data?.region });
    resetField('city', { defaultValue: data?.city });
    resetField('address', { defaultValue: data?.address });
};
