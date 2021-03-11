import data from "../data/dataBack"
import { CountriesType } from "../store/mainPage/types";

export const getCountriesAPI = (): Array<CountriesType> => data.countries;

export const getLanguageAPI = (): string => data.curLang;

export const setLanguageAPI = (lang: string) => data.curLang = lang;