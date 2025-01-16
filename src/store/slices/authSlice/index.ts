import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IStateProps } from "./types";
import { RootState } from "../../index";

const initialState: IStateProps = {
    loading: false,
    usersList: [],
    userInfo: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, { payload }: PayloadAction<IUser>) => {
            const checkUser = state.usersList.find((item) => item.email === payload.email)
            if(checkUser) {
                state.userInfo = payload
            } else {
                state.usersList = [...state.usersList, ...[payload]]
                state.userInfo = payload
            }
        },
        login: (state, { payload }: PayloadAction<Partial<IUser>>) => {
            const { password, email } = payload
            const checkUser = state.usersList.find(
                (item) =>
                    item.email === email &&
                    item.password === password
            )
            if(checkUser) {
                state.userInfo = checkUser
            }
        },
        logout: (state) => {
            state.userInfo = null
        }
    },
})

export const { addUser, login, logout } = authSlice.actions;

const selectUserInfo = (state: RootState) => state.auth
export const userInfoSelector = createSelector(
    [selectUserInfo],
    user => user.userInfo
);

export default authSlice.reducer
