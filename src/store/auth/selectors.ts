import { AppStateType } from "../store";

export const getUserName = (state: AppStateType)=> state.auth.userName;


