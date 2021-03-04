import { ActionsTypes } from "./actions";
import { MAIN_SET_LANGUAGE } from "./actionTypes";
import { initialState, initialStateType } from "./state";

const mainReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case MAIN_SET_LANGUAGE:
      return {
        ...state,
        curLang: action.curLang
      };

    default:
      return state;
  }
};

export default mainReducer;
