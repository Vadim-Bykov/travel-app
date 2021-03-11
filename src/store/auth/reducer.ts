import { ActionsTypes } from "./types";
import * as actionTypes from "./actionTypes";
import { initialState, initialStateType } from "./state";

const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case actionTypes.AUTH_SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case actionTypes.AUTH_RESET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: false
      }

    default:
      return state;
  }
};

export default authReducer;
