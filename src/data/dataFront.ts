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
