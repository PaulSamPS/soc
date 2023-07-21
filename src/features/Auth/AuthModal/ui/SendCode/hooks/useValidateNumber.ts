import { useState, ChangeEvent, useCallback, useMemo } from 'react';

type UseValidateNumberReturnType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isValid: boolean;
    value: string;
};

export const useValidateNumber = (): UseValidateNumberReturnType => {
    const [value, setValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const re = useMemo(() => /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, []);

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            setValue(e.target.value);
            if (e.target.value.match(re) != null) {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
        },
        [re]
    );

    return { value, onChange, isValid };
};
