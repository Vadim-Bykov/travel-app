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

import niasvizhCastle from '../assets/dataimg/NiasvizhCastle.png';
import mirskyCastle from '../assets/dataimg/MirskyCastle.jpg';
import redChurch from '../assets/dataimg/redChurch.jpg';
import chatyn from '../assets/dataimg/Chatyn.jpg';
import bialowieza from '../assets/dataimg/BialowiezaForest.jpg';
import nationalLibrary from '../assets/dataimg/NationalLibrary.jpg';

import windsorCastle from '../assets/dataimg/WindsorCastle.jpg';
import bigBen from '../assets/dataimg/bigBen.jpg';
import hydePark from '../assets/dataimg/hydePark.jpg';
import britishMuseum from '../assets/dataimg/BritishMuseum.jpg';
import edenProject from '../assets/dataimg/EdenProject.jpg';
import westminsterAbbey from '../assets/dataimg/WestminsterAbbey.jpg';

import cologneCathedral from '../assets/dataimg/CologneCathedral.jpg';
import neuschwansteinCastle from '../assets/dataimg/NeuschwansteinCastle.jpg';
import brandenburgGate from '../assets/dataimg/BrandenburgGate.jpg';
import blackForest from '../assets/dataimg/blackforest.jpg';
import museumIsland from '../assets/dataimg/MuseumIsland.jpg';
import berlinWall from '../assets/dataimg/BerlinWall.jpg';

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
        },
        {
          img: baikal,
          en: 'Lake Baikal',
          ru: 'Озеро Байкал',
          de: 'Baikalsee',
          shortInfo: {
            en: "The greatest lake on Earth, the Russian shrine is sometimes called the “laboratory of diversity” and the world's largest repository of the purest fresh water. It is home to nearly 3,000 plant species, and more than 80% of them are found nowhere else. This is the deepest, transparent and incredibly clean lake on Earth.",
            ru: 'Величайшее озеро на Земле, российскую святыню иногда называют «лабораторией разнообразия» и крупнейшим в мире хранилищем чистейшей пресной воды. В нем обитает почти 3,000 видов растений, а более 80% из них не встречаются больше нигде. Это самое глубокое, прозрачное и невероятно чистое озеро не Земле.',
            de: 'Der größte Schrein der Erde, der russische Schrein, wird manchmal als „Labor der Vielfalt“ und als weltweit größter Speicher für reinstes Süßwasser bezeichnet. Es ist die Heimat von fast 3.000 Pflanzenarten, von denen mehr als 80% nirgendwo anders zu finden sind. Dies ist der tiefste, transparenteste und unglaublich saubere See der Erde.',
          }
        },
        {
          img: hermitage,
          en: 'Hermitage',
          ru: 'Эрмитаж',
          de: 'Einsiedelei Museum',
          shortInfo: {
            en: 'The Winter Palace in St. Petersburg is a real treasure of the country and the northern capital. Its construction began under Peter the Great. Since 1920, this historical monument has become the most magnificent and famous Russian museum - the Hermitage. Its unique collection owes its birth to Empress Catherine II herself.',
            ru: 'Зимний дворец в Санкт-Петербурге – настоящее достояние страны и северной столицы. Его строительство началось при Петре Великом. Этот исторический памятник с 1920 годов стал самым величественным и знаменитым российским музеем – Эрмитажем. Его уникальная коллекция своим рождением обязана самой государыне императрице Екатерине II.',
            de: 'Der Winterpalast in St. Petersburg ist ein wahrer Schatz des Landes und der nördlichen Hauptstadt. Der Bau begann unter Peter dem Großen. Seit 1920 ist dieses historische Denkmal das prächtigste und berühmteste russische Museum - die Eremitage. Seine einzigartige Sammlung verdankt seine Geburt Kaiserin Katharina II. Selbst.',
          }
        },
        {
          img: mamayevKurgan,
          en: 'Mamaev kurgan',
          ru: 'Мамаев курган',
          de: 'Mamaev kurgan',
          shortInfo: {
            en: 'This monument to the memory of the heroes of the Battle of Stalingrad was opened in Volgograd in 1967. The remains of the soldiers - defenders of Stalingrad are buried on the hill. A statue of the Motherland-Mother 86 meters high was immediately installed. It can be seen a few kilometers away by every traveler arriving in Volgograd.',
            ru: 'Этот монумент памяти героев Сталинградской битвы открыли в Волгограде в 1967 году. На холме захоронены останки воинов – защитников Сталинграда. Тут же установили статую Родина-мать высотой 86 метров. Её видно еще за несколько километров каждому путешественнику, прибывающему в Волгоград.',
            de: 'Dieses Denkmal zur Erinnerung an die Helden der Schlacht von Stalingrad wurde 1967 in Wolgograd eröffnet. Die Überreste der Soldaten - Verteidiger von Stalingrad sind auf dem Hügel begraben. Sofort wurde eine 86 Meter hohe Statue der Mutterland-Mutter aufgestellt. Jeder Reisende, der in Wolgograd ankommt, kann es einige Kilometer entfernt sehen.',
          }
        },
        {
          img: tretyakovGallery,
          en: 'Tretyakov Gallery',
          ru: 'Третьяковская галерея',
          de: 'Tretjakow-Galerie',
          shortInfo: {
            en: "The Tretyakov Gallery, founded in 1856, is a historical heritage of Russia. The gallery's exposition is located in several buildings. More than 1,500,000 people come here annually to get acquainted with the well-known monuments of Russian art. At present, the collection of the Tretyakov Gallery covers a long historical period from representatives of Old Russian painting of the 11th century to canvases of contemporaries.",
            ru: 'Третьяковская галерея, основанная в 1856, – историческое достояние России. Экспозиция галереи располагается в нескольких корпусах. Чтобы ознакомиться с общеизвестными памятниками русского искусства, сюда ежегодно приезжает более 1,500,000 человек. В настоящее время коллекция Третьяковки охватывает большой исторический период от представителей древнерусской живописи XI века до полотен современников.',
            de: 'Die 1856 gegründete Tretjakow-Galerie ist ein historisches Erbe Russlands. Die Ausstellung der Galerie befindet sich in mehreren Gebäuden. Jährlich kommen mehr als 1.500.000 Menschen hierher, um die bekannten Denkmäler der russischen Kunst kennenzulernen. Gegenwärtig umfasst die Sammlung der Tretjakow-Galerie eine lange historische Periode, von Vertretern der altrussischen Malerei des 11. Jahrhunderts bis hin zu Leinwänden von Zeitgenossen.',
          }
        },
      ],
    },
    {
      id: 2,
      shortInfo: {
        en: 'Belarus, the official name is the Republic of Belarus, a state in Eastern Europe. The population as of January 1, 2020 is 9,408,400 people, the territory is 207,595 km². It ranks 94th in terms of population and 84th in terms of territory in the world.',
        ru: 'Беларусь, официальное название — Республика Беларусь — государство в Восточной Европе. Население на 1 января 2020 года составляет 9 408 400 человек, территория — 207 595 км². Занимает 94-е место по количеству населения и 84-е по территории в мире.',
        de: 'Weißrussland, der offizielle Name ist die Republik Belarus, ein Staat in Osteuropa. Die Bevölkerung zum 1. Januar 2020 beträgt 9.408.400 Menschen, das Gebiet ist 207.595 km². Es belegt den 94. Platz in Bezug auf die Bevölkerung und den 84. Platz in Bezug auf das Territorium der Welt.',
      },
      video: {
        en: '',
        ru: '',
        de: '',
      },
      sightseeings: [
        {
        img: niasvizhCastle,
        en: 'Nesvizh Castle',
        ru: 'Несвижский замок',
        de: 'Nesvizh Schloss',
        shortInfo: {
          en: "Nesvizh Castle is a reflection of the luxury of the Lithuanian nobility. He is big, ambitious and very strict. The architectural structure was built in the sixteenth century.",
          ru: 'Несвижский замок является отражением роскоши Литовской знати. Он большой, амбициозный и очень строгий. Архитектурное сооружение построено в шестнадцатом веке.',
          de: 'Die Burg von Nesvizh spiegelt den Luxus des litauischen Adels wider. Er ist groß, ehrgeizig und sehr streng. Die architektonische Struktur wurde im 16. Jahrhundert erbaut.',
        }
        },
        {
          img: mirskyCastle,
          en: 'Mir Castle',
          ru: 'Мирский замок',
          de: 'Mir Schloss',
          shortInfo: {
            en: 'From the outside, it looks like a birthday cake. Creamy brown tones in the facade cladding and pointed turrets make it festive and elegant. But in fact, this is a powerful fortification. The castle towers are 25 m high.',
            ru: 'Со стороны он похож на праздничный торт. Кремово-коричневые тона в облицовке фасадов и остроконечные башенки делают его праздничным и нарядным. А на самом деле это мощное фортификационное сооружение. Башни замка имеют высоту 25 м.',
            de: 'Von außen sieht es aus wie eine Geburtstagstorte. Cremige Brauntöne in der Fassadenverkleidung und spitze Türme machen es festlich und elegant. Tatsächlich ist dies jedoch eine mächtige Festung. Die Burgtürme sind 25 m hoch.',
          }
        },
        {
          img: redChurch,
          en: 'Church of Saints Simeon and Helena',
          ru: 'Костел Святых Симеона и Елены',
          de: 'Kirche der Heiligen Simeon und Helena',
          shortInfo: {
            en: "The church has preserved its original architecture, although Minsk was subjected to destructive effects many times during the war. The temple is dedicated to the dead children of the Minsk nobleman Voinilovich. In 1910 the temple was consecrated. It has a second name for the color of the stone - Red Church.",
            ru: 'Костел сохранил свою первозданную архитектуру, хотя Минск много раз подвергался разрушительному воздействию во время войны. Храм посвящен погибшим детям минского дворянина Войниловича. В 1910 году храм был освящен. Он имеет второе название по цвету камня — Красный костел.',
            de: 'Die Kirche hat ihre ursprüngliche Architektur bewahrt, obwohl Minsk während des Krieges viele Male zerstörerischen Auswirkungen ausgesetzt war. Der Tempel ist den toten Kindern des Minsker Adligen Voinilovich gewidmet. 1910 wurde der Tempel geweiht. Es hat einen zweiten Namen für die Farbe des Steins - Rote Kirche.',
          }
        },
        {
          img: chatyn,
          en: 'Khatyn',
          ru: 'Хатынь',
          de: 'Khatyn',
          shortInfo: {
            en: 'The Khatyn Memorial Complex is a symbolic symbol of the ardent pain of the Belarusian people. Khatyn itself is not on any map of Belarus. The tragedy of a small village burned out by the Nazis is immortalized in the memorial complex.',
            ru: 'Мемориальный комплекс Хатынь — это знаковый символ горячей боли белорусского народа. Самой Хатыни нет ни на одной карте Белоруссии. Трагедия маленькой деревни, выжженной фашистами, увековечена в мемориальном комплексе.',
            de: 'Der Khatyn Memorial Complex ist ein symbolisches Symbol für den brennenden Schmerz des belarussischen Volkes. Khatyn selbst ist auf keiner Karte von Belarus. Die Tragödie eines kleinen Dorfes, das von den Nazis ausgebrannt wurde, ist im Gedenkkomplex verewigt.',
          }
        },
        {
          img: bialowieza,
          en: 'Bialowieza Forest',
          ru: 'Беловежская пуща',
          de: 'Bialowieza Wald',
          shortInfo: {
            en: 'It is a nature conservation site that was included in the UNESCO World Heritage Site in 1992. There are a lot of animal species here, and many of them are in the Red Book of Belarus. It is believed that the Belarusian bison is the owner of Belovezhskaya Pushcha.',
            ru: 'Это природоохранный объект, который в 1992 году включен в мировое наследие ЮНЕСКО. Здесь чрезвычайно много видов животных, и многие из них находятся в Красной книге Белоруссии. Считается, что белорусский зубр — хозяин Беловежской пущи.',
            de: 'Es ist ein Naturschutzgebiet, das 1992 zum UNESCO-Weltkulturerbe gehört. Es gibt hier viele Tierarten, und viele davon stehen im Roten Buch von Belarus. Es wird angenommen, dass der belarussische Bison der Besitzer von Belovezhskaya Pushcha ist.',
          }
        },
        {
          img: nationalLibrary,
          en: 'National Library of Belarus',
          ru: 'Национальная библиотека Беларуси',
          de: 'Nationalbibliothek von Belarus',
          shortInfo: {
            en: "Over 200 enterprises and more than 5 thousand employees worked around the clock to create the complex. The building is an enchanting architectural monument, including, among others, an observation deck at level 23.",
            ru: 'Над созданием комплекса круглые сутки трудилось свыше 200 предприятий и более 5 тысяч работников. Постройка является фееричным памятником архитектуры, включающим в числе прочих обзорную площадку на 23 уровне.',
            de: 'Über 200 Unternehmen und mehr als 5.000 Mitarbeiter haben rund um die Uhr an der Erstellung des Komplexes gearbeitet. Das Gebäude ist ein bezauberndes architektonisches Denkmal, zu dem unter anderem eine Aussichtsplattform auf Ebene 23 gehört.',
          }
        },
      ],
    },
    {
      id: 3,
      shortInfo: {
        en: 'Great Britain or the United Kingdom, the full official form is the United Kingdom of Great Britain and Northern Ireland - an island nation in the northwest of continental Europe.',
        ru: 'Великобритания или Соединённое Королевство, полная официальная форма — Соединённое Королевство Великобритании и Северной Ирландии — островное государство на северо-западе от континентальной Европы.',
        de: 'Großbritannien oder das Vereinigte Königreich, die vollständige offizielle Form ist das Vereinigte Königreich Großbritannien und Nordirland - ein Inselstaat im Nordwesten Kontinentaleuropas.',
      },
      video: {
        en: '',
        ru: '',
        de: '',
      },
      sightseeings: [
        {
        img: windsorCastle,
        en: 'Windsor castle',
        ru: 'Виндзорский замок',
        de: 'Schloss Windsor',
        shortInfo: {
          en: "The castle was built in 1070, and today it is considered the most romantic building in the country. Moreover, due to the size of 580 m. By 165 m., Windsor Castle got into the Guinness Book of Records as the largest castle in the world.",
          ru: 'Замок был возведен в 1070 году, и сегодня считается самой романтической постройкой страны. Более того, благодаря размерам в 580 м. на 165 м., Виндзорский замок попал в Книгу Рекордов Гиннеса в качестве крупнейшего замка всего мира.',
          de: 'Das Schloss wurde 1070 erbaut und gilt heute als das romantischste Gebäude des Landes. Aufgrund der Größe von 580 m wurde Windsor Castle um 165 m als größtes Schloss der Welt in das Guinness-Buch der Rekorde aufgenommen.',
        }
        },
        {
          img: hydePark,
          en: 'Hyde Park',
          ru: 'Гайд-парк',
          de: 'Hyde Park',
          shortInfo: {
            en: "There is the famous Speakers' Corner, an animal cemetery, a memorial in honor of Princess Diana, the Wellington Museum, a statue of Achilles - you can list it for a long time. Popular festivals, large-scale festivals and political rallies are regularly held on the territory of the park.",
            ru: 'Тут располагается знаменитый уголок Ораторов, кладбище животных, мемориал в честь принцессы Дианы, Музей Веллингтона, статуя Ахилла – перечислять можно еще долго. На территории парка регулярно проводятся народные гуляния, масштабные празднества и политические митинги.',
            de: "Hier befindet sich die berühmte Speakers 'Corner, der Tierfriedhof, das Denkmal zu Ehren von Prinzessin Diana, das Wellington Museum, die Statue von Achilles - Sie können es schon lange auflisten. Auf dem Territorium des Parks finden regelmäßig Volksfeste, Großfeste und politische Kundgebungen statt.",
          }
        },
        {
          img: bigBen,
          en: 'London Big Ben',
          ru: 'Лондонский Биг-Бен',
          de: 'London Big Ben',
          shortInfo: {
            en: "The Clock Tower of Westminster Palace, built over 150 years ago. The commemorative clock proclaims the most important events of the state: the coming of the New Year, the Minutes of Silence, etc.",
            ru: 'Часовая башня Вестминстерского дворца, созданна более 150 лет назад. Памятные часы провозглашают о самых важных событиях государства: наступлении Нового года, Минутах Молчания и т.д.',
            de: 'Der vor über 150 Jahren erbaute Glockenturm des Westminster Palace. Die Gedenkuhr verkündet die wichtigsten Ereignisse des Staates: das Kommen des neuen Jahres, das Protokoll der Stille usw.',
          }
        },
        {
          img: britishMuseum,
          en: 'British museum',
          ru: 'Британский музей',
          de: 'Britisches Museum',
          shortInfo: {
            en: 'This is the oldest and one of the largest museums in the world. The British Museum, located in London, is the second most visited art museum, second only to the Louvre.',
            ru: 'Это самый старинный и один из наиболее крупных музеев мира. Расположенный в Лондоне Британский музей является вторым по посещаемости художественным музеем, уступая только Лувру.',
            de: 'Dies ist das älteste und eines der größten Museen der Welt. Das British Museum in London ist nach dem Louvre das am zweithäufigsten besuchte Kunstmuseum.',
          }
        },
        {
          img: edenProject,
          en: 'Project Eden',
          ru: 'Проект Эдем',
          de: 'Projekt Eden',
          shortInfo: {
            en: 'This botanical garden is especially famous for its unique greenhouse (geodesic domes collected plants from all over the world).',
            ru: 'Этот ботанический сад особо известен своей уникальной оранжереей (геодезические купола собрали под собой растения со всех уголков Земли).',
            de: 'Dieser botanische Garten ist besonders berühmt für sein einzigartiges Gewächshaus (geodätische Kuppeln sammelten Pflanzen aus aller Welt).',
          }
        },
        {
          img: westminsterAbbey,
          en: 'Westminster Abbey',
          ru: 'Вестминстерское аббатство',
          de: 'Westminster Abbey',
          shortInfo: {
            en: "Gothic church in Westminster, built in the years 1245-1745. The church attracts attention both with its majestic appearance and expositions: weapons of the original type, paintings, rare documents and old folios.",
            ru: 'Готическая церковь в Вестминстере, возведенная в 1245- 1745 годы. Церковь привлекает внимание как своим величественным видом, так и экспозициями: оружием оригинального вида, живописью, редкими документами и старинными фолиантами.',
            de: 'Gotische Kirche in Westminster, erbaut in den Jahren 1245-1745. Die Kirche macht sowohl mit ihrem majestätischen Erscheinungsbild als auch mit ihren Ausstellungen auf sich aufmerksam: Waffen des Originaltyps, Gemälde, seltene Dokumente und alte Blätter.',
          }
        },
      ],
    },
    {
      id: 4,
      shortInfo: {
        en: 'Germany, the official name is the Federal Republic of Germany, the Federal Republic of Germany is a state in Central Europe. The area of ​​the territory is 357,408.74 km². The population as of September 30, 2019 is 83 149 300 inhabitants. It is ranked 18th in the world in terms of population and 62nd in the world in terms of territory.',
        ru: 'Германия, официальное название — Федеративная Республика Германия, ФРГ — государство в Центральной Европе. Площадь территории — 357 408,74 км². Численность населения на 30 сентября 2019 года — 83 149 300 жителей. Занимает 18-е место в мире по численности населения и 62-е в мире по территории.',
        de: 'Deutschland, der offizielle Name ist die Bundesrepublik Deutschland, die Bundesrepublik Deutschland ist ein Staat in Mitteleuropa. Die Fläche des Territoriums beträgt 357.408,74 km². Die Bevölkerung zum 30. September 2019 beträgt 83 149 300 Einwohner. In Bezug auf die Bevölkerung belegt es den 18. Platz in der Welt und in Bezug auf das Territorium den 62. Platz in der Welt.',
      },
      video: {
        en: '',
        ru: '',
        de: '',
      },
      sightseeings: [
        {
        img: cologneCathedral,
        en: 'Cologne Cathedral',
        ru: 'Кёльнский собор',
        de: 'Kölner Dom',
        shortInfo: {
          en: "The mere appearance of this cathedral causes genuine admiration. The architecture of the majestic structure seems to be woven from the lace of stone towers, columns and pilasters, united in a single architectural composition. And the general shape of the building, when viewed from above, is made in the form of a Latin cross.",
          ru: 'Один только внешний вид этого собора вызывает неподдельное восхищение. Архитектура величественного сооружения будто бы соткана из кружева каменных башен, колонн и пилястр, объединенных в единой архитектурной композиции. А общая форма здания, если смотреть сверху, выполнена в форме латинского креста.',
          de: 'Das bloße Erscheinen dieser Kathedrale sorgt für echte Bewunderung. Die Architektur des majestätischen Gebäudes scheint aus der Spitze von Steintürmen, Säulen und Pilastern gewebt zu sein, die in einer einzigen architektonischen Komposition vereint sind. Und die allgemeine Form des Gebäudes ist von oben gesehen in Form eines lateinischen Kreuzes.',
        }
        },
        {
          img: neuschwansteinCastle,
          en: 'Neuschwanstein Castle',
          ru: 'Замок Нойшванштайн',
          de: 'Schloss Neuschwanstein',
          shortInfo: {
            en: "At the first glance at the facade of Neuschwanstein Castle from afar, there is a strong association of this amazingly beautiful building with a toy. This beauty of neat ivory-colored turrets topped with pointed emerald domes seems so implausible.",
            ru: 'При первом взгляде на фасад замка Нойшванштайн издалека, возникает устойчивая ассоциация этого удивительного по красоте сооружения с игрушкой. Настолько неправдоподобной кажется эта красота аккуратных башенок цвета слоновой кости, увенчанных заострёнными изумрудными куполами.',
            de: "Auf den ersten Blick auf die Fassade des Schlosses Neuschwanstein aus der Ferne besteht eine starke Assoziation dieses erstaunlich schönen Gebäudes mit einem Spielzeug. Diese Schönheit ordentlicher elfenbeinfarbener Türme mit spitzen Smaragdkuppeln scheint so unplausibel.",
          }
        },
        {
          img: brandenburgGate,
          en: 'Brandenburg Gate',
          ru: 'Бранденбургские ворота',
          de: 'Brandenburger Tor',
          shortInfo: {
            en: "This is a truly legendary structure, impressive in its size, architecture and symbolizing the most important milestones in the history of the country. So, the Gate of Peace, as they were originally called, was laid in 1789, and the works of ancient builders were taken as the ideological basis of the project.",
            ru: 'Это поистине легендарное сооружение, впечатляющее своими размерами, архитектурой и символизирующее важнейшие вехи истории страны.Так, Ворота Мира, как они назывались изначально, были заложены в 1789 году, а за идейную основу проекта были взяты произведения античных строителей.',
            de: 'Dies ist ein wahrhaft legendäres Bauwerk, das in seiner Größe und Architektur beeindruckt und die wichtigsten Meilensteine ​​in der Geschichte des Landes symbolisiert. So wurde 1789 das Tor des Friedens, wie sie ursprünglich genannt wurden, und die Werke antiker Bauherren gelegt wurden als ideologische Grundlage des Projekts genommen.',
          }
        },
        {
          img: blackForest,
          en: 'Black forest',
          ru: 'Чёрный лес',
          de: 'Schwarzer Wald',
          shortInfo: {
            en: 'The Black Forest evokes memories of characters from the famous fairy tales of the Brothers Grimm. The forest area is mostly made up of dense and tall spruce trees, which is where the name of the forest came from - Black.',
            ru: 'Чёрный лес навевает воспоминания о персонажах из известных сказок братьев Гримм. Лесной массив в большинстве своём составляют густые и высокие ели, откуда пошло и название леса — Чёрный.',
            de: 'Der Schwarzwald erinnert an Charaktere aus den berühmten Märchen der Brüder Grimm. Das Waldgebiet besteht hauptsächlich aus dichten und hohen Fichten, von denen der Name des Waldes stammt - Schwarz.',
          }
        },
        {
          img: museumIsland,
          en: 'Berlin Museum Island',
          ru: 'Музейный остров Берлина',
          de: 'Berliner Museumsinse',
          shortInfo: {
            en: "Right in the middle of the European capital, on the small island of Spreeinsel, there is one of the most striking and impressive objects of the country's cultural heritage - the so-called museum island, which is a whole museum complex that includes five museums founded at different times.",
            ru: 'Прямо посреди европейской столицы, на небольшом острове Шпрееинзель, расположился один из самых ярких и впечатляющих объектов культурного наследия страны — так называемый музейный остров, который представляет собой целый музейный комплекс, включающий пять музеев, основанных в разное время.',
            de: 'Mitten in der europäischen Hauptstadt, auf der kleinen Insel Spreeinsel, befindet sich eines der auffälligsten und beeindruckendsten Objekte des kulturellen Erbes des Landes - die sogenannte Museumsinsel, ein ganzer Museumskomplex mit fünf gegründeten Museen zu anderen Zeiten.',
          }
        },
        {
          img: berlinWall,
          en: 'Berlin Wall',
          ru: 'Берлинская стена',
          de: 'Berliner Mauer',
          shortInfo: {
            en: "Every October, Germany celebrates the Day of German Unity, which consists in the reunification of the western and eastern parts of the state. In the minds of residents, the symbol of reunification was the end of the so-called Berlin Wall, which once divided not only the city, but also the state, and the entire people, and became a symbol of the Cold War.",
            ru: 'Каждый октябрь в Германии отмечается День немецкого единства, состоящий в воссоединении западной и восточной частей государства. В сознании жителей символом воссоединения стало прекращение существования так называемой Берлинской стены, некогда разделившей не только город, но и государство, и весь народ, и ставшей символом «холодной войны»',
            de: 'Deutschland feiert jedes Jahr im Oktober den Tag der deutschen Einheit, der in der Wiedervereinigung der westlichen und östlichen Teile des Staates besteht. In den Köpfen der Bewohner wurde das Ende der Existenz der sogenannten Berliner Mauer, die einst nicht nur die Stadt, sondern auch den Staat und das gesamte Volk teilte, zum Symbol der Wiedervereinigung und zum Symbol der Kälte Krieg.',
          }
        },
      ],
    },
  ]
};

export default data;
