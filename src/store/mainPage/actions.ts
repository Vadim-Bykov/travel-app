import { type } from 'os';
import { MAIN_SET_LANGUAGE } from "./actionTypes";

type SetLanguageActionType = {
   type: typeof MAIN_SET_LANGUAGE
   curLang: string
};
 
export const setLanguage = (curLang: string): SetLanguageActionType => {
   return { type: MAIN_SET_LANGUAGE, curLang };
};

export type ActionsTypes = SetLanguageActionType;