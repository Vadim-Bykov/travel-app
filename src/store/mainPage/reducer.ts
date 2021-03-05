import { ActionsTypes } from "./types";
import * as actionTypes from "./actionTypes";
import { initialState, initialStateType } from "./state";

const mainReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case actionTypes.MAIN_SET_LANGUAGE:
      return {
        ...state,
        curLang: action.curLang
      };
    
    case actionTypes.MAIN_SET_COUNTRIES_DATA:
      return {
        ...state,
        countries: action.countries
      }

    default:
      return state;
  }
};

export default mainReducer;
