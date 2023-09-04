import { IProfile, IProfileEditProps } from '../types/profile';

interface CheckFormDataProps {
    formData: IProfileEditProps
    data: IProfile | undefined
    country: string | string[]
}
export const checkFormData = ({ formData, data, country }: CheckFormDataProps): IProfileEditProps => {
    if (typeof country === 'string') {
        formData.country = country;
    }

    if (formData.firstname === '' && data) {
        formData.firstname = data?.firstname;
    }

    if (formData.lastname === '' && data) {
        formData.lastname = data?.lastname;
    }

    if (formData.region === '' && data) {
        formData.region = data?.region;
    }

    if (formData.city === '' && data) {
        formData.city = data?.city;
    }

    if (formData.address === '' && data) {
        formData.address = data?.address;
    }

    return formData;
};
