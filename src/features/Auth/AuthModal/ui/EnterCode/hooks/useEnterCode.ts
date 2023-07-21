import { ChangeEvent, useCallback, useMemo, useState } from 'react';

interface UseEnterCodeResult {
    code: string[];
    handleInputCode: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useEnterCode = (): UseEnterCodeResult => {
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const re = useMemo(() => /^[0-9]$/, []);

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
            }
        },
        [re]
    );

    return { code, handleInputCode };
};
