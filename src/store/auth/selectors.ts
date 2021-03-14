import { AppStateType } from "../store";

export const getUserName = (state: AppStateType)=> state.auth.userName;
export const getIsAuth = (state: AppStateType)=> state.auth.isAuth;


