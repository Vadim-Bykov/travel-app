import moscow from '../assets/img/moscow.jpg';
import minsk from '../assets/img/minsk.jpg';
import london from '../assets/img/london.jpg';
import berlin from '../assets/img/berlin.jpg';
import paris from '../assets/img/paris.jpg';
import beijing from '../assets/img/beijing.jpg';
import tokyo from '../assets/img/tokyo.jpg';
import washington from '../assets/img/washington.jpg';

const data = {
  countries: [
    {
      id: 1,
      name: {
        en: 'Russia',
        ru: 'Россия',
        de: 'Russland',
      },
      capital: {
        en: 'Moscow',
        ru: 'Москва',
        de: 'Moskau',
      },
      mainPhoto: moscow,
    },

    {
      id: 2,
      name: {
        en: 'Belarus',
        ru: 'Беларусь',
        de: 'Weißrussland',
      },
      capital: {
        en: 'Minsk',
        ru: 'Минск',
        de: 'Minsk',
      },
      mainPhoto: minsk,
    },

    {
      id: 3,
      name: {
        en: 'England',
        ru: 'Англия',
        de: 'England',
      },
      capital: {
        en: 'London',
        ru: 'Лондон',
        de: 'London',
      },
      mainPhoto: london,
    },

    {
      id: 4,
      name: {
        en: 'Germany',
        ru: 'Германия',
        de: 'Deutschland',
      },
      capital: {
        en: 'Berlin',
        ru: 'Берлин',
        de: 'Berlin',
      },
      mainPhoto: berlin,
    },

    {
      id: 5,
      name: {
        en: 'France',
        ru: 'Франция',
        de: 'Frankreich',
      },
      capital: {
        en: 'Paris',
        ru: 'Париж',
        de: 'Paris',
      },
      mainPhoto: paris,
    },

    {
      id: 6,
      name: {
        en: 'China',
        ru: 'Китай',
        de: 'China',
      },
      capital: {
        en: 'Beijing',
        ru: 'Пекин',
        de: 'Peking',
      },
      mainPhoto: beijing,
    },

    {
      id: 7,
      name: {
        en: 'USA',
        ru: 'США',
        de: 'USA',
      },
      capital: {
        en: 'Washington',
        ru: 'Вашингтон',
        de: 'Washington',
      },
      mainPhoto: tokyo,
    },

    {
      id: 8,
      name: {
        en: 'Japan',
        ru: 'Япония',
        de: 'Japan',
      },
      capital: {
        en: 'Tokyo',
        ru: 'Токио',
        de: 'Tokio',
      },
      mainPhoto: washington,
    },
  ],

  curLang: 'en',

  users: [{}],

  userData: {},
};

export default data;
