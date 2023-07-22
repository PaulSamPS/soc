import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

interface UseEnterCodeResult {
    code: string[];
    handleInputCode: (event: ChangeEvent<HTMLInputElement>) => void;
    re: RegExp;
    isNotValidCode: boolean;
}

export const useEnterCode = (): UseEnterCodeResult => {
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const [isNotValidCode, setIsNotValidCode] = useState(true);
    const re = useMemo(() => /^[0-9]+$/, []);

    useEffect(() => {
        if (re.test(code.join('')) && code.join('').length === 4) {
            setIsNotValidCode(false);
        } else {
            setIsNotValidCode(true);
        }
    }, [code, re]);

    const handleInputCode = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => {
            const index: number = Number(event.target.getAttribute('id'));
            const { value } = event.target;
            if (event.target.value.match(re) != null) {
                setCode((prev) => {
                    const newArr = [...prev];
                    newArr[index] = value;
                    return newArr;
                });

                if (event.target.nextSibling) {
                    (event.target.nextSibling as HTMLInputElement).focus();
                }
            } else {
                setCode((prev) => {
                    const newArr = [...prev];
                    newArr[index] = value;
                    return newArr;
                });
            }
        },
        [re]
    );

    return { code, handleInputCode, re, isNotValidCode };
};
