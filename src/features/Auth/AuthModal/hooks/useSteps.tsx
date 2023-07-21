import { ComponentType, useCallback, useMemo, useState } from 'react';
import { SendCodeLazy } from '@/features/Auth/AuthModal/ui/SendCode/SendCodeLazy';
import { EnterCodeLazy } from '@/features/Auth/AuthModal/ui/EnterCode/EnterCodeLazy';
import { IStepContext } from '@/features/Auth/AuthModal/lib/AuthStepsContext';

type StepComponentType = {
    [key: number]: ComponentType;
};

interface UseStepsResult {
    Step: ComponentType;
    contextValue: IStepContext;
}

export const useSteps = (): UseStepsResult => {
    const [step, setStep] = useState<number>(0);
    const [phone, setPhone] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    const nextStep = useCallback(() => {
        setStep((prev) => prev + 1);
    }, []);

    const contextValue = useMemo(
        () => ({
            step,
            setStep,
            nextStep,
            setPhone,
            phone,
            setUserId,
            userId,
        }),
        [step, setStep, nextStep, setPhone, phone, setUserId, userId]
    );

    const stepComponents: StepComponentType = useMemo(
        () => ({
            0: SendCodeLazy,
            1: EnterCodeLazy,
        }),
        []
    );

    const Step = useMemo(() => stepComponents[step], [step, stepComponents]);

    return { contextValue, Step };
};
