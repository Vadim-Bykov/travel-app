import { ActionsTypes } from './types';
import * as actionTypes from './actionTypes';
import { initialState, initialStateType } from './state';

const countryReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case actionTypes.COUNTRY_SET_DATA:
      return {
        ...state,
        countryData: { ...action.data },
      };

    default:
      return state;
  }
};

export default countryReducer;
