import { createContext, Context } from 'react';

export type IStepContext = {
    step: number;
    setStep: (step: number) => void;
    nextStep: () => void;
    setPhone: (phone: string) => void;
    phone: string;
    setUserId: (userId: string) => void;
    userId: string;
};

export const AuthStepsContext: Context<IStepContext> = createContext<IStepContext>(
    {} as IStepContext
);
