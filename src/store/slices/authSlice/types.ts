export interface IUser {
    picture?: string;
    name: string;
    email: string;
    password?: string;
}

export interface IStateProps {
    loading: boolean,
    usersList: IUser[],
    userInfo: IUser | null,
    error: null,
    success: boolean,
}
