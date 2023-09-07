import { FieldNamesMarkedBoolean } from 'react-hook-form';
import { IProfile, IProfileEditProps } from '../types/profile';

interface CheckDataHasBeenChangedProps {
    dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<IProfileEditProps>>>
    data: IProfile | undefined
    country: string | string[]
    setDataNotHasBeenChanged: (value: boolean) => void
}
export const checkDataHasBeenChanged = ({
    dirtyFields,
    data,
    country,
    setDataNotHasBeenChanged
}: CheckDataHasBeenChangedProps) => {
    if (
        dirtyFields.firstname
        || dirtyFields.lastname
        || dirtyFields.country
        || dirtyFields.region
        || dirtyFields.city
        || dirtyFields.address
        || data?.country !== country
    ) {
        setDataNotHasBeenChanged(false);
    } else {
        setDataNotHasBeenChanged(true);
    }
};
