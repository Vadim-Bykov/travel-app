import { AppStateType } from "../store";
import { CountriesType } from "./types";

export const getCountries = (state: AppStateType): Array<CountriesType> => state.main.countries;

export const getCurLang = (state: AppStateType): string => state.main.curLang;

