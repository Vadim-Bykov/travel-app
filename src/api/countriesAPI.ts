import data from '../data/dataBack';
import { CountriesType } from '../store/mainPage/types';

export const getCountriesAPI = (): Array<CountriesType> =>
  data.countries.map((country) => ({
    id: country.id,
    name: country.name,
    capital: country.capital,
    mainPhoto: country.mainPhoto,
  }));

export const getLanguageAPI = (): string => data.curLang;

export const setLanguageAPI = (lang: string) => (data.curLang = lang);
