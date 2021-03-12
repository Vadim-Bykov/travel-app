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
import baikal from '../assets/dataimg/LakeBaikal.jpg';
import hermitage from '../assets/dataimg/Hermitage.jpg';
import mamayevKurgan from '../assets/dataimg/MamayevKurgan.jpg';
import tretyakovGallery from '../assets/dataimg/TretyakovGallery.jpg';

// import niasvizhCastle from '../assets/dataimg/NiasvizhCastle.png';
// import mirskyCastle from '../assets/dataimg/MirskyCastle.jpg';
// import redChurch from '../assets/dataimg/redChurch.jpg';
// import chatyn from '../assets/dataimg/Chatyn.jpg';
// import bialowieza from '../assets/dataimg/BialowiezaForest.jpg';
// import nationalLibrary from '../assets/dataimg/NationalLibrary.jpg';

// import windsorCastle from '../assets/dataimg/WindsorCastle.jpg';
// import bigBen from '../assets/dataimg/bigBen.jpg';
// import hydePark from '../assets/dataimg/hydePark.jpg';
// import britishMuseum from '../assets/dataimg/BritishMuseum.jpg';
// import edenProject from '../assets/dataimg/EdenProject.jpg';
// import westminsterAbbey from '../assets/dataimg/WestminsterAbbey.jpg';

// import cologneCathedral from '../assets/dataimg/CologneCathedral.jpg';
// import neuschwansteinCastle from '../assets/dataimg/NeuschwansteinCastle.jpg';
// import brandenburgGate from '../assets/dataimg/BrandenburgGate.jpg';
// import blackForest from '../assets/dataimg/blackforest.jpg';
// import museumIsland from '../assets/dataimg/MuseumIsland.jpg';
// import berlinWall from '../assets/dataimg/BerlinWall.jpg';

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
          name: {
            en: 'Red Square',
            ru: 'Красная площадь',
            de: 'Roter Platz',
          },
          shortInfo: {
            en:
              "Red Square is a visiting card of Moscow. The Kremlin with the Spasskaya Tower, the main clock of Russia, has become the symbol of Red Square. If you face the Kremlin wall, where the main politicians and prominent personalities of the country are buried, then on the left you will see the most beautiful temple in the country - St. Basil's Cathedral. Many guides begin excursions with a visit to this particular building, which delights in its uniqueness and grace",
            ru:
              'Красная площадь – визитная карточка Москвы. Cимволом Красной площади стал Кремль со Спасской башней – главными часами России. Если встать лицом к кремлевской стене, у которой похоронены главные политики и выдающиеся личности страны, то слева Вы увидите самый красивый храм страны – Собор Василия Блаженного. Многие экскурсоводы начинают экскурсии с посещения именно этого сооружения, восхищающего своей необычностью и изяществом.',
            de:
              'Der Rote Platz ist eine Visitenkarte von Moskau. Der Kreml mit dem Spasskaya-Turm, der Hauptuhr Russlands, ist zum Symbol des Roten Platzes geworden. Wenn Sie sich der Kremlmauer gegenübersehen, in der die wichtigsten Politiker und prominenten Persönlichkeiten des Landes begraben sind, sehen Sie links den schönsten Tempel des Landes - die Basilius-Kathedrale. Viele Führer beginnen ihre Ausflüge mit einem Besuch dieses besonderen Gebäudes, das sich durch seine Einzigartigkeit und Anmut auszeichnet',
          },
        },
        {
          img: petergof,
          name: {
            en: 'Peterhof (Petrodvortsovy district)',
            ru: 'Петергоф (Петродворцовый район)',
            de: 'Peterhof (Bezirk Petrodvortsovy)',
          },
          shortInfo: {
            en:
              'Peter the Great erected Peterhof - a residence for summer vacation in the countryside with many palaces and a beautiful park. Peterhof is one of the most beautiful sights of Russia. A huge number of historical buildings and works of art are concentrated here in a small area.',
            ru:
              'Петр I возвёл Петергоф – резиденцию для летнего загородного отдыха с множеством дворцов и прекрасным парком. Петергоф относится к самым красивым достопримечательностям России. Здесь на небольшой площади сосредоточилось огромное количество исторических сооружений и произведений искусства.',
            de:
              'Peter der Große errichtete Peterhof - eine Residenz für Sommerferien auf dem Land mit vielen Palästen und einem schönen Park. Peterhof ist eine der schönsten Sehenswürdigkeiten Russlands. Eine große Anzahl historischer Gebäude und Kunstwerke konzentriert sich hier auf eine kleine Fläche.',
          },
        },
        {
          img: baikal,
          name: {
            en: 'Lake Baikal',
            ru: 'Озеро Байкал',
            de: 'Baikalsee',
          },
          shortInfo: {
            en:
              "The greatest lake on Earth, the Russian shrine is sometimes called the “laboratory of diversity” and the world's largest repository of the purest fresh water. It is home to nearly 3,000 plant species, and more than 80% of them are found nowhere else. This is the deepest, transparent and incredibly clean lake on Earth.",
            ru:
              'Величайшее озеро на Земле, российскую святыню иногда называют «лабораторией разнообразия» и крупнейшим в мире хранилищем чистейшей пресной воды. В нем обитает почти 3,000 видов растений, а более 80% из них не встречаются больше нигде. Это самое глубокое, прозрачное и невероятно чистое озеро не Земле.',
            de:
              'Der größte Schrein der Erde, der russische Schrein, wird manchmal als „Labor der Vielfalt“ und als weltweit größter Speicher für reinstes Süßwasser bezeichnet. Es ist die Heimat von fast 3.000 Pflanzenarten, von denen mehr als 80% nirgendwo anders zu finden sind. Dies ist der tiefste, transparenteste und unglaublich saubere See der Erde.',
          },
        },
        {
          img: hermitage,
          name: {
            en: 'Hermitage',
            ru: 'Эрмитаж',
            de: 'Einsiedelei Museum',
          },
          shortInfo: {
            en:
              'The Winter Palace in St. Petersburg is a real treasure of the country and the northern capital. Its construction began under Peter the Great. Since 1920, this historical monument has become the most magnificent and famous Russian museum - the Hermitage. Its unique collection owes its birth to Empress Catherine II herself.',
            ru:
              'Зимний дворец в Санкт-Петербурге – настоящее достояние страны и северной столицы. Его строительство началось при Петре Великом. Этот исторический памятник с 1920 годов стал самым величественным и знаменитым российским музеем – Эрмитажем. Его уникальная коллекция своим рождением обязана самой государыне императрице Екатерине II.',
            de:
              'Der Winterpalast in St. Petersburg ist ein wahrer Schatz des Landes und der nördlichen Hauptstadt. Der Bau begann unter Peter dem Großen. Seit 1920 ist dieses historische Denkmal das prächtigste und berühmteste russische Museum - die Eremitage. Seine einzigartige Sammlung verdankt seine Geburt Kaiserin Katharina II. Selbst.',
          },
        },
        {
          img: mamayevKurgan,
          name: {
            en: 'Mamaev kurgan',
            ru: 'Мамаев курган',
            de: 'Mamaev kurgan',
          },
          shortInfo: {
            en:
              'This monument to the memory of the heroes of the Battle of Stalingrad was opened in Volgograd in 1967. The remains of the soldiers - defenders of Stalingrad are buried on the hill. A statue of the Motherland-Mother 86 meters high was immediately installed. It can be seen a few kilometers away by every traveler arriving in Volgograd.',
            ru:
              'Этот монумент памяти героев Сталинградской битвы открыли в Волгограде в 1967 году. На холме захоронены останки воинов – защитников Сталинграда. Тут же установили статую Родина-мать высотой 86 метров. Её видно еще за несколько километров каждому путешественнику, прибывающему в Волгоград.',
            de:
              'Dieses Denkmal zur Erinnerung an die Helden der Schlacht von Stalingrad wurde 1967 in Wolgograd eröffnet. Die Überreste der Soldaten - Verteidiger von Stalingrad sind auf dem Hügel begraben. Sofort wurde eine 86 Meter hohe Statue der Mutterland-Mutter aufgestellt. Jeder Reisende, der in Wolgograd ankommt, kann es einige Kilometer entfernt sehen.',
          },
        },
        {
          img: tretyakovGallery,
          name: {
            en: 'Tretyakov Gallery',
            ru: 'Третьяковская галерея',
            de: 'Tretjakow-Galerie',
          },
          shortInfo: {
            en:
              "The Tretyakov Gallery, founded in 1856, is a historical heritage of Russia. The gallery's exposition is located in several buildings. More than 1,500,000 people come here annually to get acquainted with the well-known monuments of Russian art. At present, the collection of the Tretyakov Gallery covers a long historical period from representatives of Old Russian painting of the 11th century to canvases of contemporaries.",
            ru:
              'Третьяковская галерея, основанная в 1856, – историческое достояние России. Экспозиция галереи располагается в нескольких корпусах. Чтобы ознакомиться с общеизвестными памятниками русского искусства, сюда ежегодно приезжает более 1,500,000 человек. В настоящее время коллекция Третьяковки охватывает большой исторический период от представителей древнерусской живописи XI века до полотен современников.',
            de:
              'Die 1856 gegründete Tretjakow-Galerie ist ein historisches Erbe Russlands. Die Ausstellung der Galerie befindet sich in mehreren Gebäuden. Jährlich kommen mehr als 1.500.000 Menschen hierher, um die bekannten Denkmäler der russischen Kunst kennenzulernen. Gegenwärtig umfasst die Sammlung der Tretjakow-Galerie eine lange historische Periode, von Vertretern der altrussischen Malerei des 11. Jahrhunderts bis hin zu Leinwänden von Zeitgenossen.',
          },
        },
      ],
    },

    // {
    //   id: 2,
    //   name: {
    //     en: 'Belarus',
    //     ru: 'Беларусь',
    //     de: 'Weißrussland',
    //   },
    //   capital: {
    //     en: 'Minsk',
    //     ru: 'Минск',
    //     de: 'Minsk',
    //   },
    //   mainPhoto: minsk,
    // },

    // {
    //   id: 3,
    //   name: {
    //     en: 'England',
    //     ru: 'Англия',
    //     de: 'England',
    //   },
    //   capital: {
    //     en: 'London',
    //     ru: 'Лондон',
    //     de: 'London',
    //   },
    //   mainPhoto: london,
    // },

    // {
    //   id: 4,
    //   name: {
    //     en: 'Germany',
    //     ru: 'Германия',
    //     de: 'Deutschland',
    //   },
    //   capital: {
    //     en: 'Berlin',
    //     ru: 'Берлин',
    //     de: 'Berlin',
    //   },
    //   mainPhoto: berlin,
    // },

    // {
    //   id: 5,
    //   name: {
    //     en: 'France',
    //     ru: 'Франция',
    //     de: 'Frankreich',
    //   },
    //   capital: {
    //     en: 'Paris',
    //     ru: 'Париж',
    //     de: 'Paris',
    //   },
    //   mainPhoto: paris,
    // },

    // {
    //   id: 6,
    //   name: {
    //     en: 'China',
    //     ru: 'Китай',
    //     de: 'China',
    //   },
    //   capital: {
    //     en: 'Beijing',
    //     ru: 'Пекин',
    //     de: 'Peking',
    //   },
    //   mainPhoto: beijing,
    // },

    // {
    //   id: 7,
    //   name: {
    //     en: 'USA',
    //     ru: 'США',
    //     de: 'USA',
    //   },
    //   capital: {
    //     en: 'Washington',
    //     ru: 'Вашингтон',
    //     de: 'Washington',
    //   },
    //   mainPhoto: tokyo,
    // },

    // {
    //   id: 8,
    //   name: {
    //     en: 'Japan',
    //     ru: 'Япония',
    //     de: 'Japan',
    //   },
    //   capital: {
    //     en: 'Tokyo',
    //     ru: 'Токио',
    //     de: 'Tokio',
    //   },
    //   mainPhoto: washington,
    // },
  ],

  curLang: 'en',

  userData: {},
};

export default data;
