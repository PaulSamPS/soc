export interface IProfile {
    id: number
    avatar: {
        url: string
        name: string
    },
    firstname: string
    lastname: string
    country: string
    region: string
    city: string
    address: string
    createdAt: Date
    updatedAt: Date
    user: number
}

export interface ProfileSchema {
    data?: IProfile
    isLoading: boolean
    error?: string
    readonly: boolean
}

export interface IProfileEditProps {
    firstname: string
    lastname: string
    avatar: File
    country: string
    region: string
    city: string
    address: string
}
