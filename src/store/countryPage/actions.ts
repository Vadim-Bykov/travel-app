import * as actionTypes from './actionTypes';
import * as types from './types';

export const setData = (data: types.CountryDataType): types.SetCountryDataType => ({
  type: actionTypes.COUNTRY_SET_DATA,
  data
});
