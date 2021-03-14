import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store';
import * as actionTypes from './actionTypes';

export type UserDataType = {
  userName: string | null;
  email: string | null;
  password: string | null;
}

export type SetUserDataType = {
  type: typeof actionTypes.AUTH_SET_USER_DATA;
  data: UserDataType;
};

export type ResetUserDataType = {
  type: typeof actionTypes.AUTH_RESET_USER_DATA;
  data: UserDataType;
};


export type ActionsTypes = SetUserDataType | ResetUserDataType;

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;
