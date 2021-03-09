import * as actionTypes from './actionTypes';
import * as types from './types';

export const setUserData = (
  data: types.UserDataType
): types.SetUserDataType => ({
  type: actionTypes.AUTH_SET_USER_DATA,
  data: { ...data },
});

export const resetUserData = (): types.ResetUserDataType => ({
  type: actionTypes.AUTH_RESET_USER_DATA,
  data: { userName: null, email: null, password: null },
});
