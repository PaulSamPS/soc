export interface User {
    id: number;
    phone: string;
}

export interface UserSchema {
    authData?: User;
}
