import { AppStateType } from "../store";

export const getCountries = (state: AppStateType) => state.main.countries;

export const getCurLang = (state: AppStateType) => state.main.curLang;

export const getCardBtnTitle = (state: AppStateType) => state.main.cardBtnTitle;
