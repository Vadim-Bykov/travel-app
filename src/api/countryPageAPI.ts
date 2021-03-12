import data from '../data/dataBack';
import { CountryDataType } from '../store/countryPage/types';

export const getCountryInfoAPI = (id: string): CountryDataType | undefined =>
  data.countries.find((country) => country.id === +id);
