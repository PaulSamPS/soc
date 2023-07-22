export interface LoginSchema {
    phone: string;
    code: string;
    isLoading: boolean;
    error?: string;
}
