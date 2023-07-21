import { ChangeEvent, useCallback, useMemo, useState } from 'react';

type UseValidateCodeResult = {
    valueCode: string;
    isValidSymbol: boolean;
    onChangeCode: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const useValidateCode = (): UseValidateCodeResult => {
    const [valueCode, setValueCode] = useState<string>('');
    const [isValidSymbol, setIsValidSymbol] = useState<boolean>(true);
    const re = useMemo(() => /^[0-9]$/, []);

    const onChangeCode = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            setValueCode(e.target.value);
            if (e.target.value.match(re) != null) {
                setIsValidSymbol(false);
            } else {
                setIsValidSymbol(true);
            }
        },
        [re]
    );

    return { isValidSymbol, onChangeCode, valueCode };
};
