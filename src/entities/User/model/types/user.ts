export interface User {
    id: number;
    email: string;
    username: string;
}

export interface UserSchema {
    authData?: User
}

export interface TokenAuthData {
    user: User
}
