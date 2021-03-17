import { CountriesType, LangType } from '../store/mainPage/types';

export const cardBtnTitle = {
  en: 'Learn more',
  ru: 'Узнать больше',
  de: 'Mehr wissen',
};

export const searchText = {
  en: 'Search',
  ru: 'Поиск',
  de: 'Suche',
};

export const selectLangValue = [
  { en: 'en', ru: 'анг', de: 'eng' },
  { en: 'ru', ru: 'рус', de: 'rus' },
  { en: 'de', ru: 'нем', de: 'deu' },
];

export let countriesCopy: Array<CountriesType> = [];

export const loginData = {
  formTitle: {
    en: 'Please, fill in the form.',
    ru: 'Пожалуйста, заполните форму.',
    de: 'Bitte füllen Sie das Formular aus.',
  } as LangType,

  login: {
    en: 'login',
    ru: 'войти',
    de: 'einloggen',
  } as LangType,

  logout: {
    en: 'logout',
    ru: 'выйти',
    de: 'abmelden',
  } as LangType,

  username: {
    en: 'Enter username',
    ru: 'Введите имя пользователя',
    de: 'Geben Sie den Benutzernamen ein',
  } as LangType,

  password: {
    en: 'Enter password',
    ru: 'Введите пароль',
    de: 'Passwort eingeben',
  } as LangType,

  email: {
    en: 'Enter email',
    ru: 'Введите адрес электронной почты',
    de: 'Email eingeben',
  } as LangType,

  button: {
    en: 'Submit',
    ru: 'Отправить',
    de: 'Einreichen',
  } as LangType,
};

export const capital = {
  en: 'Capital',
  ru: 'Столица',
  de: 'Hauptstadt',
} as LangType;

export const USDName = {
  en: 'US dollar',
  ru: 'доллар США',
  de: 'US dollar',
} as LangType;

export const EURName = {
  en: 'euro',
  ru: 'евро',
  de: 'euro',
} as LangType;

export const BYNName = {
  en: 'belarusian ruble',
  ru: 'белорусский рубль',
  de: 'belarussischer rubel',
} as LangType;

export const countryPositions = {
  '1': {
    // Москва [55.751244, 37.618423]
    latitude: 55.751244,
    longitude: 37.618423,
  },

  '2': {
    // Минск [53.904541, 27.561523]
    latitude: 53.904541,
    longitude: 27.561523,
  },

  '3': {
    // London [51.507351, -0.127758]
    latitude: 51.507351,
    longitude: -0.127758,
  },

  '4': {
    // Berlin [52.531677, 13.381777]
    latitude: 52.531677,
    longitude: 13.381777,
  },

  '5': {
    // Paris [48.876965, 2.295138]
    latitude: 48.876965,
    longitude: 2.295138,
  },

  '6': {
    // Пекин [39.916668, 116.383331]
    latitude: 39.916668,
    longitude: 116.383331,
  },

  '7': {
    // Вашингтон [38.889248, -77.050636]
    latitude: 38.889248,
    longitude: -77.050636,
  },

  '8': {
    // Токио [35.652832, 139.839478]
    latitude: 35.652832,
    longitude: 139.839478,
  },
};

