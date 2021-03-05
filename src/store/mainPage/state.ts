import * as types from './types';

export const initialState = {
  countries: [] as Array<types.CountriesType>,

  cardBtnTitle: {
    en: 'Learn more',
    ru: 'Узнать больше',
    de: 'Mehr wissen'
  } as types.LangType,

  curLang: '',
};

export type initialStateType = typeof initialState;