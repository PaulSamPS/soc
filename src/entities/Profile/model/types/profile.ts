export interface Profile {
    email: string
    username: string
    id: number
}

export interface ProfileSchema {
    data: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
