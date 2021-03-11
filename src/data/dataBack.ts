import moscow from '../assets/img/moscow.jpg';
import minsk from '../assets/img/minsk.jpg';
import london from '../assets/img/london.jpg';
import berlin from '../assets/img/berlin.jpg';
import paris from '../assets/img/paris.jpg';
import beijing from '../assets/img/beijing.jpg';
import tokyo from '../assets/img/tokyo.jpg';
import washington from '../assets/img/washington.jpg';

import redsquare from '../assets/dataimg/redsquare.jpg';
import petergof from '../assets/dataimg/Petergof.jpg';

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

  userData: [
    {
      id: 1,
      shortInfo: {
        en: `Russia is a state in Eastern Europe and North Asia. The territory of Russia is 17 125 191 km², the population of the country is 146,238,185 people.
        It ranks first in the world in terms of territory, sixth in terms of GDP and ninth in terms of population. The monetary unit is the Russian ruble.`,
        ru: `Россия — государство в Восточной Европе и Северной Азии. Территория России составляет 17 125 191 км², население страны составляет 146 238 185 чел.
        Занимает первое место в мире по территории, шестое — по объёму ВВП и девятое — по численности населения. Денежная единица — российский рубль.`,
        de: `Russland ist ein Staat in Osteuropa und Nordasien. Das Gebiet Russlands ist 17 125 191 km², Die Bevölkerung des Landes beträgt 146.238.185 Menschen.
        In Bezug auf das Territorium steht es weltweit an erster Stelle, in Bezug auf das BIP an sechster Stelle und in Bezug auf die Bevölkerung auf dem neunten Platz. Die Währungseinheit ist der russische Rubel.`,
      },
      video: {
        en: '',
        ru: '',
        de: '',
      },
      sightseeings: [
        {
        img: redsquare,
        en: 'Red Square',
        ru: 'Красная площадь',
        de: 'Roter Platz',
        shortInfo: {
          en: "Red Square is a visiting card of Moscow. The Kremlin with the Spasskaya Tower, the main clock of Russia, has become the symbol of Red Square. If you face the Kremlin wall, where the main politicians and prominent personalities of the country are buried, then on the left you will see the most beautiful temple in the country - St. Basil's Cathedral. Many guides begin excursions with a visit to this particular building, which delights in its uniqueness and grace",
          ru: 'Красная площадь – визитная карточка Москвы. Cимволом Красной площади стал Кремль со Спасской башней – главными часами России. Если встать лицом к кремлевской стене, у которой похоронены главные политики и выдающиеся личности страны, то слева Вы увидите самый красивый храм страны – Собор Василия Блаженного. Многие экскурсоводы начинают экскурсии с посещения именно этого сооружения, восхищающего своей необычностью и изяществом.',
          de: 'Der Rote Platz ist eine Visitenkarte von Moskau. Der Kreml mit dem Spasskaya-Turm, der Hauptuhr Russlands, ist zum Symbol des Roten Platzes geworden. Wenn Sie sich der Kremlmauer gegenübersehen, in der die wichtigsten Politiker und prominenten Persönlichkeiten des Landes begraben sind, sehen Sie links den schönsten Tempel des Landes - die Basilius-Kathedrale. Viele Führer beginnen ihre Ausflüge mit einem Besuch dieses besonderen Gebäudes, das sich durch seine Einzigartigkeit und Anmut auszeichnet',
        }
        },
        {
          img: petergof,
          en: 'Peterhof (Petrodvortsovy district)',
          ru: 'Петергоф (Петродворцовый район)',
          de: 'Peterhof (Bezirk Petrodvortsovy)',
          shortInfo: {
            en: 'Peter the Great erected Peterhof - a residence for summer vacation in the countryside with many palaces and a beautiful park. Peterhof is one of the most beautiful sights of Russia. A huge number of historical buildings and works of art are concentrated here in a small area.',
            ru: 'Петр I возвёл Петергоф – резиденцию для летнего загородного отдыха с множеством дворцов и прекрасным парком. Петергоф относится к самым красивым достопримечательностям России. Здесь на небольшой площади сосредоточилось огромное количество исторических сооружений и произведений искусства.',
            de: 'Peter der Große errichtete Peterhof - eine Residenz für Sommerferien auf dem Land mit vielen Palästen und einem schönen Park. Peterhof ist eine der schönsten Sehenswürdigkeiten Russlands. Eine große Anzahl historischer Gebäude und Kunstwerke konzentriert sich hier auf eine kleine Fläche.',
          }
        }
      ],
    },
  ]
};

export default data;
