import * as api from '../../api/countryPageAPI';
import * as actions from './actions';
import { CountryDataType, ThunkType } from './types';

export const requestCountryData = (id: string): ThunkType => (dispatch) => {
  const country: CountryDataType | undefined = api.getCountryInfoAPI(id);
  if(country) dispatch(actions.setData(country));
};
