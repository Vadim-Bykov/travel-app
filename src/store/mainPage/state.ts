import moscow from '../../assets/img/moscow.jpg';
import minsk from '../../assets/img/minsk.jpg';

type NameType = {
  en: string
  ru: string
  de: string
}

export type CountriesType = {
  id: number
  name: NameType 
  capital: NameType
  mainPhoto: string
}


export const initialState = {
  countries: [
    {
      id: 1,
      name: {
        en: 'Russia',
        ru: 'Россия',
        de: 'Russland'
      },
      capital: {
        en: 'Moscow',
        ru: 'Москва',
        de: 'Moskau'
      },
      mainPhoto: moscow
    },

    {
      id: 2,
      name: {
        en: 'Belarus',
        ru: 'Беларусь',
        de: 'Weißrussland'
      },
      capital: {
        en: 'Minsk',
        ru: 'Минск',
        de: 'Minsk'
      },
      mainPhoto: minsk
    },
  ] as Array<CountriesType>,

  curLang: 'en'
};

export type initialStateType = typeof initialState;