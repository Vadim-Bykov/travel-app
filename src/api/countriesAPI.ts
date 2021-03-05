import data from "../data/data"
import { CountriesType } from "../store/mainPage/types";

export const getCountriesAPI = (): Array<CountriesType> => data.countries;

export const getLanguageAPI = (): string => data.curLang;