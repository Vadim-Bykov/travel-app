import moscow from '../assets/img/moscow.jpg';
import minsk from '../assets/img/minsk.jpg';
import london from '../assets/img/london.jpg';
import berlin from '../assets/img/berlin.jpg';
import paris from '../assets/img/paris.jpg';
import beijing from '../assets/img/beijing.jpg';
import tokyo from '../assets/img/tokyo.jpg';
import washington from '../assets/img/washington.jpg';

import videoRussiaRU from '../assets/video/russiaRU.mp4';
import videoRussiaEN from '../assets/video/russiaEN.mp4';
import videoRussiaDE from '../assets/video/russiaDE.mp4';
import videoBelarusRU from '../assets/video/belarusRU.mp4';
import videoBelarusEN from '../assets/video/belarusEN.mp4';
import videoBelarusDE from '../assets/video/belarusDE.mp4';
import videoEnglandRU from '../assets/video/englandRU.mp4';
import videoEnglandEN from '../assets/video/englandEN.mp4';
import videoEnglandDE from '../assets/video/englandDE.mp4';
import videoGermanyRU from '../assets/video/germanyRU.mp4';
import videoGermanyEN from '../assets/video/germanyEN.mp4';
import videoGermanyDE from '../assets/video/germanyDE.mp4';
import videoFranceRU from '../assets/video/franceRU.mp4';
import videoFranceEN from '../assets/video/franceEN.mp4';
import videoFranceDE from '../assets/video/franceDE.mp4';
import videoChinaRU from '../assets/video/chinaRU.mp4';
import videoChinaEN from '../assets/video/chinaEN.mp4';
import videoChinaDE from '../assets/video/chinaDE.mp4';
import videoUsaRU from '../assets/video/usaRU.mp4';
import videoUsaEN from '../assets/video/usaEN.mp4';
import videoUsaDE from '../assets/video/usaDE.mp4';
import videoJapanRU from '../assets/video/japanRU.mp4';
import videoJapanEN from '../assets/video/japanEN.mp4';
import videoJapanDE from '../assets/video/japanDE.mp4';

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

import eiffelTower from '../assets/dataimg/EiffelTower.jpg';
import louvre from '../assets/dataimg/Louvre.jpg';
import versailles from '../assets/dataimg/Versailles.jpg';
import azure from '../assets/dataimg/Azure.jpg';
import fontainebleau from '../assets/dataimg/Fontainebleau.jpg';
import disneyland from '../assets/dataimg/Disneyland.jpg';

import greatWall from '../assets/dataimg/GreatWall.jpg';
import potalaPalace from '../assets/dataimg/PotalaPalace.jpg';
import terracottaArmy from '../assets/dataimg/TerracottaArmy.jpg';
import giantBuddha from '../assets/dataimg/GiantBuddha.jpg';
import hongKong from '../assets/dataimg/HongKong.jpg';
import shaolin from '../assets/dataimg/Shaolin.jpg';

import statueofLiberty from '../assets/dataimg/StatueofLiberty.jpg';
import centralPark from '../assets/dataimg/CentralPark.jpg';
import chinaTown from '../assets/dataimg/ChinaTown.jpg';
import whiteHouse from '../assets/dataimg/WhiteHouse.jpg';
import pentagon from '../assets/dataimg/Pentagon.jpg';
import lasVegas from '../assets/dataimg/LasVegas.jpg';

import fushimiInariShrine from '../assets/dataimg/Fushimiinarishrine.jpg';
import skyTree from '../assets/dataimg/skytree.jpg';
import odaiba from '../assets/dataimg/Odaiba.jpg';
import asakusa from '../assets/dataimg/Asakusa.jpg';
import fuji from '../assets/dataimg/Fuji.jpg';
import goldenPavilion from '../assets/dataimg/GoldenPavilion.jpg';

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

      timeZone: 'Europe/Moscow',
      currencyCode: 'RUB',
      currencyName: {
        en: 'russian ruble',
        ru: 'российский рубль',
        de: 'russischer rubel',
      },

      shortInfo: {
        en: `Russia is a state in Eastern Europe and North Asia. The territory of Russia is 17 125 191 km², the population of the country is 146,238,185 people.
        It ranks first in the world in terms of territory, sixth in terms of GDP and ninth in terms of population. The monetary unit is the Russian ruble.`,
        ru: `Россия — государство в Восточной Европе и Северной Азии. Территория России составляет 17 125 191 км², население страны составляет 146 238 185 чел.
        Занимает первое место в мире по территории, шестое — по объёму ВВП и девятое — по численности населения. Денежная единица — российский рубль.`,
        de: `Russland ist ein Staat in Osteuropa und Nordasien. Das Gebiet Russlands ist 17 125 191 km², Die Bevölkerung des Landes beträgt 146.238.185 Menschen.
        In Bezug auf das Territorium steht es weltweit an erster Stelle, in Bezug auf das BIP an sechster Stelle und in Bezug auf die Bevölkerung auf dem neunten Platz. Die Währungseinheit ist der russische Rubel.`,
      },
      video: {
        en: videoRussiaEN,
        ru: videoRussiaRU,
        de: videoRussiaDE,
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
              'This monument to the memory of the heroes of the Battle of Stalingrad was opened in Volgograd in 1967. The remains of the soldiers - defenders of Stalingrad are buried on the hill. A statue of the Motherland-Mother 86 meters high was immediately installed. It can be seen a few kilometers away by every traveler arriving in Volgograd.',
            ru:
              'Этот монумент памяти героев Сталинградской битвы открыли в Волгограде в 1967 году. На холме захоронены останки воинов – защитников Сталинграда. Тут же установили статую Родина-мать высотой 86 метров. Её видно еще за несколько километров каждому путешественнику, прибывающему в Волгоград.',
            de:
              'Dieses Denkmal zur Erinnerung an die Helden der Schlacht von Stalingrad wurde 1967 in Wolgograd eröffnet. Die Überreste der Soldaten - Verteidiger von Stalingrad sind auf dem Hügel begraben. Sofort wurde eine 86 Meter hohe Statue der Mutterland-Mutter aufgestellt. Jeder Reisende, der in Wolgograd ankommt, kann es einige Kilometer entfernt sehen.',
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
              "The Tretyakov Gallery, founded in 1856, is a historical heritage of Russia. The gallery's exposition is located in several buildings. More than 1,500,000 people come here annually to get acquainted with the well-known monuments of Russian art. At present, the collection of the Tretyakov Gallery covers a long historical period from representatives of Old Russian painting of the 11th century to canvases of contemporaries.",
            ru:
              'Третьяковская галерея, основанная в 1856, – историческое достояние России. Экспозиция галереи располагается в нескольких корпусах. Чтобы ознакомиться с общеизвестными памятниками русского искусства, сюда ежегодно приезжает более 1,500,000 человек. В настоящее время коллекция Третьяковки охватывает большой исторический период от представителей древнерусской живописи XI века до полотен современников.',
            de:
              'Die 1856 gegründete Tretjakow-Galerie ist ein historisches Erbe Russlands. Die Ausstellung der Galerie befindet sich in mehreren Gebäuden. Jährlich kommen mehr als 1.500.000 Menschen hierher, um die bekannten Denkmäler der russischen Kunst kennenzulernen. Gegenwärtig umfasst die Sammlung der Tretjakow-Galerie eine lange historische Periode, von Vertretern der altrussischen Malerei des 11. Jahrhunderts bis hin zu Leinwänden von Zeitgenossen.',
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

      timeZone: 'Europe/Minsk',
      currencyCode: 'BYN',
      currencyName: {
        en: 'belarusian ruble',
        ru: 'белорусский рубль',
        de: 'belarussischer rubel',
      },

      shortInfo: {
        en:
          'Belarus, the official name is the Republic of Belarus, a state in Eastern Europe. The population as of January 1, 2020 is 9,408,400 people, the territory is 207,595 km². It ranks 94th in terms of population and 84th in terms of territory in the world.',
        ru:
          'Беларусь, официальное название — Республика Беларусь — государство в Восточной Европе. Население на 1 января 2020 года составляет 9 408 400 человек, территория — 207 595 км². Занимает 94-е место по количеству населения и 84-е по территории в мире.',
        de:
          'Weißrussland, der offizielle Name ist die Republik Belarus, ein Staat in Osteuropa. Die Bevölkerung zum 1. Januar 2020 beträgt 9.408.400 Menschen, das Gebiet ist 207.595 km². Es belegt den 94. Platz in Bezug auf die Bevölkerung und den 84. Platz in Bezug auf das Territorium der Welt.',
      },
      video: {
        en: videoBelarusEN,
        ru: videoBelarusRU,
        de: videoBelarusDE,
      },
      sightseeings: [
        {
          img: niasvizhCastle,
          name: {
            en: 'Nesvizh Castle',
            ru: 'Несвижский замок',
            de: 'Nesvizh Schloss',
          },
          shortInfo: {
            en:
              'Nesvizh Castle is a reflection of the luxury of the Lithuanian nobility. He is big, ambitious and very strict. The architectural structure was built in the sixteenth century.',
            ru:
              'Несвижский замок является отражением роскоши Литовской знати. Он большой, амбициозный и очень строгий. Архитектурное сооружение построено в шестнадцатом веке.',
            de:
              'Die Burg von Nesvizh spiegelt den Luxus des litauischen Adels wider. Er ist groß, ehrgeizig und sehr streng. Die architektonische Struktur wurde im 16. Jahrhundert erbaut.',
          },
        },
        {
          img: mirskyCastle,
          name: { en: 'Mir Castle', ru: 'Мирский замок', de: 'Mir Schloss' },
          shortInfo: {
            en:
              'From the outside, it looks like a birthday cake. Creamy brown tones in the facade cladding and pointed turrets make it festive and elegant. But in fact, this is a powerful fortification. The castle towers are 25 m high.',
            ru:
              'Со стороны он похож на праздничный торт. Кремово-коричневые тона в облицовке фасадов и остроконечные башенки делают его праздничным и нарядным. А на самом деле это мощное фортификационное сооружение. Башни замка имеют высоту 25 м.',
            de:
              'Von außen sieht es aus wie eine Geburtstagstorte. Cremige Brauntöne in der Fassadenverkleidung und spitze Türme machen es festlich und elegant. Tatsächlich ist dies jedoch eine mächtige Festung. Die Burgtürme sind 25 m hoch.',
          },
        },
        {
          img: redChurch,
          name: {
            en: 'Church of Saints Simeon and Helena',
            ru: 'Костел Святых Симеона и Елены',
            de: 'Kirche der Heiligen Simeon und Helena',
          },
          shortInfo: {
            en:
              'The church has preserved its original architecture, although Minsk was subjected to destructive effects many times during the war. The temple is dedicated to the dead children of the Minsk nobleman Voinilovich. In 1910 the temple was consecrated. It has a second name for the color of the stone - Red Church.',
            ru:
              'Костел сохранил свою первозданную архитектуру, хотя Минск много раз подвергался разрушительному воздействию во время войны. Храм посвящен погибшим детям минского дворянина Войниловича. В 1910 году храм был освящен. Он имеет второе название по цвету камня — Красный костел.',
            de:
              'Die Kirche hat ihre ursprüngliche Architektur bewahrt, obwohl Minsk während des Krieges viele Male zerstörerischen Auswirkungen ausgesetzt war. Der Tempel ist den toten Kindern des Minsker Adligen Voinilovich gewidmet. 1910 wurde der Tempel geweiht. Es hat einen zweiten Namen für die Farbe des Steins - Rote Kirche.',
          },
        },
        {
          img: chatyn,
          name: { en: 'Khatyn', ru: 'Хатынь', de: 'Khatyn' },
          shortInfo: {
            en:
              'The Khatyn Memorial Complex is a symbolic symbol of the ardent pain of the Belarusian people. Khatyn itself is not on any map of Belarus. The tragedy of a small village burned out by the Nazis is immortalized in the memorial complex.',
            ru:
              'Мемориальный комплекс Хатынь — это знаковый символ горячей боли белорусского народа. Самой Хатыни нет ни на одной карте Белоруссии. Трагедия маленькой деревни, выжженной фашистами, увековечена в мемориальном комплексе.',
            de:
              'Der Khatyn Memorial Complex ist ein symbolisches Symbol für den brennenden Schmerz des belarussischen Volkes. Khatyn selbst ist auf keiner Karte von Belarus. Die Tragödie eines kleinen Dorfes, das von den Nazis ausgebrannt wurde, ist im Gedenkkomplex verewigt.',
          },
        },
        {
          img: bialowieza,
          name: {
            en: 'Bialowieza Forest',
            ru: 'Беловежская пуща',
            de: 'Bialowieza Wald',
          },
          shortInfo: {
            en:
              'It is a nature conservation site that was included in the UNESCO World Heritage Site in 1992. There are a lot of animal species here, and many of them are in the Red Book of Belarus. It is believed that the Belarusian bison is the owner of Belovezhskaya Pushcha.',
            ru:
              'Это природоохранный объект, который в 1992 году включен в мировое наследие ЮНЕСКО. Здесь чрезвычайно много видов животных, и многие из них находятся в Красной книге Белоруссии. Считается, что белорусский зубр — хозяин Беловежской пущи.',
            de:
              'Es ist ein Naturschutzgebiet, das 1992 zum UNESCO-Weltkulturerbe gehört. Es gibt hier viele Tierarten, und viele davon stehen im Roten Buch von Belarus. Es wird angenommen, dass der belarussische Bison der Besitzer von Belovezhskaya Pushcha ist.',
          },
        },
        {
          img: nationalLibrary,
          name: {
            en: 'National Library of Belarus',
            ru: 'Национальная библиотека Беларуси',
            de: 'Nationalbibliothek von Belarus',
          },
          shortInfo: {
            en:
              'Over 200 enterprises and more than 5 thousand employees worked around the clock to create the complex. The building is an enchanting architectural monument, including, among others, an observation deck at level 23.',
            ru:
              'Над созданием комплекса круглые сутки трудилось свыше 200 предприятий и более 5 тысяч работников. Постройка является фееричным памятником архитектуры, включающим в числе прочих обзорную площадку на 23 уровне.',
            de:
              'Über 200 Unternehmen und mehr als 5.000 Mitarbeiter haben rund um die Uhr an der Erstellung des Komplexes gearbeitet. Das Gebäude ist ein bezauberndes architektonisches Denkmal, zu dem unter anderem eine Aussichtsplattform auf Ebene 23 gehört.',
          },
        },
      ],
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

      timeZone: 'Europe/London',
      currencyCode: 'GBP',
      currencyName: {
        en: 'pound sterling',
        ru: 'фунт стерлингов',
        de: 'pfund sterling',
      },

      shortInfo: {
        en:
          'Great Britain or the United Kingdom, the full official form is the United Kingdom of Great Britain and Northern Ireland - an island nation in the northwest of continental Europe.',
        ru:
          'Великобритания или Соединённое Королевство, полная официальная форма — Соединённое Королевство Великобритании и Северной Ирландии — островное государство на северо-западе от континентальной Европы.',
        de:
          'Großbritannien oder das Vereinigte Königreich, die vollständige offizielle Form ist das Vereinigte Königreich Großbritannien und Nordirland - ein Inselstaat im Nordwesten Kontinentaleuropas.',
      },
      video: {
        en: videoEnglandEN,
        ru: videoEnglandRU,
        de: videoEnglandDE,
      },
      sightseeings: [
        {
          img: windsorCastle,
          name: {
            en: 'Windsor castle',
            ru: 'Виндзорский замок',
            de: 'Schloss Windsor',
          },
          shortInfo: {
            en:
              'The castle was built in 1070, and today it is considered the most romantic building in the country. Moreover, due to the size of 580 m. By 165 m., Windsor Castle got into the Guinness Book of Records as the largest castle in the world.',
            ru:
              'Замок был возведен в 1070 году, и сегодня считается самой романтической постройкой страны. Более того, благодаря размерам в 580 м. на 165 м., Виндзорский замок попал в Книгу Рекордов Гиннеса в качестве крупнейшего замка всего мира.',
            de:
              'Das Schloss wurde 1070 erbaut und gilt heute als das romantischste Gebäude des Landes. Aufgrund der Größe von 580 m wurde Windsor Castle um 165 m als größtes Schloss der Welt in das Guinness-Buch der Rekorde aufgenommen.',
          },
        },
        {
          img: hydePark,
          name: { en: 'Hyde Park', ru: 'Гайд-парк', de: 'Hyde Park' },
          shortInfo: {
            en:
              "There is the famous Speakers' Corner, an animal cemetery, a memorial in honor of Princess Diana, the Wellington Museum, a statue of Achilles - you can list it for a long time. Popular festivals, large-scale festivals and political rallies are regularly held on the territory of the park.",
            ru:
              'Тут располагается знаменитый уголок Ораторов, кладбище животных, мемориал в честь принцессы Дианы, Музей Веллингтона, статуя Ахилла – перечислять можно еще долго. На территории парка регулярно проводятся народные гуляния, масштабные празднества и политические митинги.',
            de:
              "Hier befindet sich die berühmte Speakers 'Corner, der Tierfriedhof, das Denkmal zu Ehren von Prinzessin Diana, das Wellington Museum, die Statue von Achilles - Sie können es schon lange auflisten. Auf dem Territorium des Parks finden regelmäßig Volksfeste, Großfeste und politische Kundgebungen statt.",
          },
        },
        {
          img: bigBen,
          name: {
            en: 'London Big Ben',
            ru: 'Лондонский Биг-Бен',
            de: 'London Big Ben',
          },
          shortInfo: {
            en:
              'The Clock Tower of Westminster Palace, built over 150 years ago. The commemorative clock proclaims the most important events of the state: the coming of the New Year, the Minutes of Silence, etc.',
            ru:
              'Часовая башня Вестминстерского дворца, созданна более 150 лет назад. Памятные часы провозглашают о самых важных событиях государства: наступлении Нового года, Минутах Молчания и т.д.',
            de:
              'Der vor über 150 Jahren erbaute Glockenturm des Westminster Palace. Die Gedenkuhr verkündet die wichtigsten Ereignisse des Staates: das Kommen des neuen Jahres, das Protokoll der Stille usw.',
          },
        },
        {
          img: britishMuseum,
          name: {
            en: 'British museum',
            ru: 'Британский музей',
            de: 'Britisches Museum',
          },
          shortInfo: {
            en:
              'This is the oldest and one of the largest museums in the world. The British Museum, located in London, is the second most visited art museum, second only to the Louvre.',
            ru:
              'Это самый старинный и один из наиболее крупных музеев мира. Расположенный в Лондоне Британский музей является вторым по посещаемости художественным музеем, уступая только Лувру.',
            de:
              'Dies ist das älteste und eines der größten Museen der Welt. Das British Museum in London ist nach dem Louvre das am zweithäufigsten besuchte Kunstmuseum.',
          },
        },
        {
          img: edenProject,
          name: { en: 'Project Eden', ru: 'Проект Эдем', de: 'Projekt Eden' },
          shortInfo: {
            en:
              'This botanical garden is especially famous for its unique greenhouse (geodesic domes collected plants from all over the world).',
            ru:
              'Этот ботанический сад особо известен своей уникальной оранжереей (геодезические купола собрали под собой растения со всех уголков Земли).',
            de:
              'Dieser botanische Garten ist besonders berühmt für sein einzigartiges Gewächshaus (geodätische Kuppeln sammelten Pflanzen aus aller Welt).',
          },
        },
        {
          img: westminsterAbbey,
          name: {
            en: 'Westminster Abbey',
            ru: 'Вестминстерское аббатство',
            de: 'Westminster Abbey',
          },
          shortInfo: {
            en:
              'Gothic church in Westminster, built in the years 1245-1745. The church attracts attention both with its majestic appearance and expositions: weapons of the original type, paintings, rare documents and old folios.',
            ru:
              'Готическая церковь в Вестминстере, возведенная в 1245- 1745 годы. Церковь привлекает внимание как своим величественным видом, так и экспозициями: оружием оригинального вида, живописью, редкими документами и старинными фолиантами.',
            de:
              'Gotische Kirche in Westminster, erbaut in den Jahren 1245-1745. Die Kirche macht sowohl mit ihrem majestätischen Erscheinungsbild als auch mit ihren Ausstellungen auf sich aufmerksam: Waffen des Originaltyps, Gemälde, seltene Dokumente und alte Blätter.',
          },
        },
      ],
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

      timeZone: 'Europe/Berlin',
      currencyCode: 'EUR',
      currencyName: {
        en: 'euro',
        ru: 'евро',
        de: 'euro',
      },

      shortInfo: {
        en:
          'Germany, the official name is the Federal Republic of Germany, the Federal Republic of Germany is a state in Central Europe. The area of ​​the territory is 357,408.74 km². The population as of September 30, 2019 is 83 149 300 inhabitants. It is ranked 18th in the world in terms of population and 62nd in the world in terms of territory.',
        ru:
          'Германия, официальное название — Федеративная Республика Германия, ФРГ — государство в Центральной Европе. Площадь территории — 357 408,74 км². Численность населения на 30 сентября 2019 года — 83 149 300 жителей. Занимает 18-е место в мире по численности населения и 62-е в мире по территории.',
        de:
          'Deutschland, der offizielle Name ist die Bundesrepublik Deutschland, die Bundesrepublik Deutschland ist ein Staat in Mitteleuropa. Die Fläche des Territoriums beträgt 357.408,74 km². Die Bevölkerung zum 30. September 2019 beträgt 83 149 300 Einwohner. In Bezug auf die Bevölkerung belegt es den 18. Platz in der Welt und in Bezug auf das Territorium den 62. Platz in der Welt.',
      },
      video: {
        en: videoGermanyEN,
        ru: videoGermanyRU,
        de: videoGermanyDE,
      },
      sightseeings: [
        {
          img: cologneCathedral,
          name: {
            en: 'Cologne Cathedral',
            ru: 'Кёльнский собор',
            de: 'Kölner Dom',
          },
          shortInfo: {
            en:
              'The mere appearance of this cathedral causes genuine admiration. The architecture of the majestic structure seems to be woven from the lace of stone towers, columns and pilasters, united in a single architectural composition. And the general shape of the building, when viewed from above, is made in the form of a Latin cross.',
            ru:
              'Один только внешний вид этого собора вызывает неподдельное восхищение. Архитектура величественного сооружения будто бы соткана из кружева каменных башен, колонн и пилястр, объединенных в единой архитектурной композиции. А общая форма здания, если смотреть сверху, выполнена в форме латинского креста.',
            de:
              'Das bloße Erscheinen dieser Kathedrale sorgt für echte Bewunderung. Die Architektur des majestätischen Gebäudes scheint aus der Spitze von Steintürmen, Säulen und Pilastern gewebt zu sein, die in einer einzigen architektonischen Komposition vereint sind. Und die allgemeine Form des Gebäudes ist von oben gesehen in Form eines lateinischen Kreuzes.',
          },
        },
        {
          img: neuschwansteinCastle,
          name: {
            en: 'Neuschwanstein Castle',
            ru: 'Замок Нойшванштайн',
            de: 'Schloss Neuschwanstein',
          },
          shortInfo: {
            en:
              'At the first glance at the facade of Neuschwanstein Castle from afar, there is a strong association of this amazingly beautiful building with a toy. This beauty of neat ivory-colored turrets topped with pointed emerald domes seems so implausible.',
            ru:
              'При первом взгляде на фасад замка Нойшванштайн издалека, возникает устойчивая ассоциация этого удивительного по красоте сооружения с игрушкой. Настолько неправдоподобной кажется эта красота аккуратных башенок цвета слоновой кости, увенчанных заострёнными изумрудными куполами.',
            de:
              'Auf den ersten Blick auf die Fassade des Schlosses Neuschwanstein aus der Ferne besteht eine starke Assoziation dieses erstaunlich schönen Gebäudes mit einem Spielzeug. Diese Schönheit ordentlicher elfenbeinfarbener Türme mit spitzen Smaragdkuppeln scheint so unplausibel.',
          },
        },
        {
          img: brandenburgGate,
          name: {
            en: 'Brandenburg Gate',
            ru: 'Бранденбургские ворота',
            de: 'Brandenburger Tor',
          },
          shortInfo: {
            en:
              'This is a truly legendary structure, impressive in its size, architecture and symbolizing the most important milestones in the history of the country. So, the Gate of Peace, as they were originally called, was laid in 1789, and the works of ancient builders were taken as the ideological basis of the project.',
            ru:
              'Это поистине легендарное сооружение, впечатляющее своими размерами, архитектурой и символизирующее важнейшие вехи истории страны.Так, Ворота Мира, как они назывались изначально, были заложены в 1789 году, а за идейную основу проекта были взяты произведения античных строителей.',
            de:
              'Dies ist ein wahrhaft legendäres Bauwerk, das in seiner Größe und Architektur beeindruckt und die wichtigsten Meilensteine ​​in der Geschichte des Landes symbolisiert. So wurde 1789 das Tor des Friedens, wie sie ursprünglich genannt wurden, und die Werke antiker Bauherren gelegt wurden als ideologische Grundlage des Projekts genommen.',
          },
        },
        {
          img: blackForest,
          name: { en: 'Black forest', ru: 'Чёрный лес', de: 'Schwarzer Wald' },
          shortInfo: {
            en:
              'The Black Forest evokes memories of characters from the famous fairy tales of the Brothers Grimm. The forest area is mostly made up of dense and tall spruce trees, which is where the name of the forest came from - Black.',
            ru:
              'Чёрный лес навевает воспоминания о персонажах из известных сказок братьев Гримм. Лесной массив в большинстве своём составляют густые и высокие ели, откуда пошло и название леса — Чёрный.',
            de:
              'Der Schwarzwald erinnert an Charaktere aus den berühmten Märchen der Brüder Grimm. Das Waldgebiet besteht hauptsächlich aus dichten und hohen Fichten, von denen der Name des Waldes stammt - Schwarz.',
          },
        },
        {
          img: museumIsland,
          name: {
            en: 'Berlin Museum Island',
            ru: 'Музейный остров Берлина',
            de: 'Berliner Museumsinse',
          },
          shortInfo: {
            en:
              "Right in the middle of the European capital, on the small island of Spreeinsel, there is one of the most striking and impressive objects of the country's cultural heritage - the so-called museum island, which is a whole museum complex that includes five museums founded at different times.",
            ru:
              'Прямо посреди европейской столицы, на небольшом острове Шпрееинзель, расположился один из самых ярких и впечатляющих объектов культурного наследия страны — так называемый музейный остров, который представляет собой целый музейный комплекс, включающий пять музеев, основанных в разное время.',
            de:
              'Mitten in der europäischen Hauptstadt, auf der kleinen Insel Spreeinsel, befindet sich eines der auffälligsten und beeindruckendsten Objekte des kulturellen Erbes des Landes - die sogenannte Museumsinsel, ein ganzer Museumskomplex mit fünf gegründeten Museen zu anderen Zeiten.',
          },
        },
        {
          img: berlinWall,
          name: {
            en: 'Berlin Wall',
            ru: 'Берлинская стена',
            de: 'Berliner Mauer',
          },
          shortInfo: {
            en:
              'Every October, Germany celebrates the Day of German Unity, which consists in the reunification of the western and eastern parts of the state. In the minds of residents, the symbol of reunification was the end of the so-called Berlin Wall, which once divided not only the city, but also the state, and the entire people, and became a symbol of the Cold War.',
            ru:
              'Каждый октябрь в Германии отмечается День немецкого единства, состоящий в воссоединении западной и восточной частей государства. В сознании жителей символом воссоединения стало прекращение существования так называемой Берлинской стены, некогда разделившей не только город, но и государство, и весь народ, и ставшей символом «холодной войны»',
            de:
              'Deutschland feiert jedes Jahr im Oktober den Tag der deutschen Einheit, der in der Wiedervereinigung der westlichen und östlichen Teile des Staates besteht. In den Köpfen der Bewohner wurde das Ende der Existenz der sogenannten Berliner Mauer, die einst nicht nur die Stadt, sondern auch den Staat und das gesamte Volk teilte, zum Symbol der Wiedervereinigung und zum Symbol der Kälte Krieg.',
          },
        },
      ],
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

      timeZone: 'Europe/Paris',
      currencyCode: 'EUR',
      currencyName: {
        en: 'euro',
        ru: 'евро',
        de: 'euro',
      },

      shortInfo: {
        en:
          'France is a transcontinental state that includes the main territory in Western Europe and a number of overseas regions and territories. The population is 62 814 233 people in the metropolis and 67 848 156 people - including overseas possessions.',
        ru:
          'Франция — трансконтинентальное государство, включающее основную территорию в Западной Европе и ряд заморских регионов и территорий. Население — 62 814 233 человек в метрополии и 67 848 156 человек — с учётом заморских владений.',
        de:
          'Frankreich ist ein transkontinentaler Staat, der das Hauptgebiet Westeuropas und eine Reihe von Regionen und Gebieten in Übersee umfasst. Die Bevölkerung beträgt 62 814 233 Menschen in der Metropole und 67 848 156 Menschen - einschließlich ausländischer Besitztümer.',
      },
      video: {
        en: videoFranceEN,
        ru: videoFranceRU,
        de: videoFranceDE,
      },
      sightseeings: [
        {
          img: eiffelTower,
          name: {
            en: 'The Eiffel Tower',
            ru: 'Эйфелева башня',
            de: 'Der Eiffelturm',
          },
          shortInfo: {
            en:
              'Now the Eiffel Tower has gained worldwide fame, and once it caused a mixed reaction among Parisians. While the guests of the city admired the monumentality of this structure, many residents, shocked by the size of the tower, were against its presence in the city and more than once demanded that the authorities dismantle this structure.',
            ru:
              'Сейчас башня Эйфеля снискала мировую известность, а когда-то она вызывала неоднозначную реакцию среди парижан. В то время, как гости города восхищались монументальностью этого сооружения, многие жители, потрясённые размерами башни, были против её присутствия в городе и не раз требовали от властей разобрать это сооружение.',
            de:
              'Jetzt hat der Eiffelturm weltweite Bekanntheit erlangt und einmal eine zweideutige Reaktion unter den Parisern ausgelöst. Während die Gäste der Stadt die Monumentalität dieses Bauwerks bewunderten, waren viele Einwohner, die von der Größe des Turms schockiert waren, gegen seine Präsenz in der Stadt und forderten mehr als einmal den Abbau dieses Bauwerks durch die Behörden.',
          },
        },
        {
          img: louvre,
          name: { en: 'Louvre', ru: 'Лувр', de: 'Louvre' },
          shortInfo: {
            en:
              'A former fortress, once a palace, and now a museum - the Louvre in Paris has experienced all these transformations in its lifetime, becoming the most visited museum, where millions of people from all over the world come every year. The most distant past and present are intertwined here into a single whole in hundreds of thousands of exhibits, of which only 35 thousand we can see with our own eyes.',
            ru:
              'Бывшая крепость, некогда дворец, а теперь музей — все эти перевоплощения пережил на своём веку Лувр в Париже, ставший самым посещаемым музеем, куда ежегодно приезжают миллионы людей со всего мира. Самое далёкое прошлое и настоящее сплелись здесь в единое целое в сотнях тысяч экспонатов, из которых лишь 35 тысяч мы можем увидеть своими глазами.',
            de:
              'Eine ehemalige Festung, einst ein Palast und heute ein Museum - der Louvre in Paris hat all diese Veränderungen in seinem Leben erlebt und ist zum meistbesuchten Museum geworden, in das jedes Jahr Millionen von Menschen aus aller Welt kommen. Die entfernteste Vergangenheit und Gegenwart sind hier in Hunderttausenden von Exponaten zu einem Ganzen verflochten, von denen wir nur 35.000 mit eigenen Augen sehen können.',
          },
        },
        {
          img: versailles,
          name: {
            en: 'Palace of Versailles',
            ru: 'Версальский дворец',
            de: 'Schloss von Versailles',
          },
          shortInfo: {
            en:
              'The Versailles Palace is an outstanding masterpiece in the history of world architecture. The layout of the Palace of Versailles park also represents the highest achievement in park art in France. Magnificent compositions of gardens and alleys, exquisite greenhouses full of diverse vegetation, picturesque fountains of the Palace of Versailles - all this became a real standard in European architecture in the 18th century.',
            ru:
              'Версальский дворец — выдающийся шедевр в истории мирового зодчества. Планировка парка Версальского дворца также являет собой высшее достижение в парковом искусстве Франции. Великолепные композиции садов и аллей, изысканные оранжереи, полные разнообразной растительности, живописные фонтаны Версальского дворца — всё это стало настоящим эталоном в архитектуре Европы в 18 веке.',
            de:
              'Das Schloss Versailles ist ein herausragendes Meisterwerk in der Geschichte der Weltarchitektur. Die Gestaltung des Parks des Schlosses von Versailles ist auch die höchste Errungenschaft in der Parkkunst in Frankreich. Prächtige Kompositionen aus Gärten und Gassen, exquisite Gewächshäuser voller vielfältiger Vegetation, malerische Brunnen des Schlosses von Versailles - all dies wurde im 18. Jahrhundert zu einem echten Standard in der europäischen Architektur.',
          },
        },
        {
          img: azure,
          name: {
            en: "Cote d'Azur'",
            ru: 'Лазурный берег',
            de: "Cote d'Azur'",
          },
          shortInfo: {
            en:
              "The Cote d'Azur is not just a tourist attraction in France and a place of excellent rest, but also a land of amazing contrasts. For example, warm sunny beaches contrast with the snow-capped coastal Alps.",
            ru:
              'Лазурный берег — это не просто излюбленная многими туристами достопримечательность Франции и место отличного отдыха, но и земля удивительных контрастов. Так, например, тёплые солнечные пляжи здесь контрастируют с заснеженными приморскими Альпами',
            de:
              "Die Côte d'Azur ist nicht nur eine Touristenattraktion in Frankreich und ein Ort der hervorragenden Erholung, sondern auch ein Land der erstaunlichen Kontraste. Zum Beispiel stehen warme, sonnige Strände im Kontrast zu den schneebedeckten Küstenalpen.",
          },
        },
        {
          img: fontainebleau,
          name: {
            en: 'Fontainebleau palace',
            ru: 'Дворец Фонтенбло',
            de: 'Fontainebleau Palast',
          },
          shortInfo: {
            en:
              'The structure includes both graceful turrets and squat buildings, so the residence is often compared with wine glasses of different shapes and heights. The very name of the palace translates as "beautiful fountain" and comes from the name of the spring from which Napoleon Bonaparte himself once drew strength.',
            ru:
              'Сооружение включает и изящные башенки, и приземистые постройки, поэтому резиденцию часто сравнивают с разными по форме и высоте фужерами. Само название дворца переводится как «прекрасный фонтан» и происходит от названия родника, из которого некогда сам Наполеон Бонапарт черпал силы.',
            de:
              'Die Struktur umfasst sowohl anmutige Türme als auch gedrungene Gebäude, sodass die Residenz häufig mit Weingläsern unterschiedlicher Form und Höhe verglichen wird. Der Name des Palastes bedeutet "schöner Brunnen" und leitet sich vom Namen der Quelle ab, aus der einst Napoleon Bonaparte selbst Kraft schöpfte.',
          },
        },
        {
          img: disneyland,
          name: {
            en: 'Disneyland Paris',
            ru: 'Парижский Диснейлэнд',
            de: 'Disneyland Paris',
          },
          shortInfo: {
            en:
              'This gigantic, world-renowned entertainment complex includes parks, hotels, fabulous "countries" and entire residential areas. In terms of attendance, Disneyland surpasses all tourist sites in the countries of the Old World. The total area of ​​the grandiose fairytale complex is 1,943 hectares, and more than 12.5 million visitors annually rest and have fun on its territory.',
            ru:
              'Этот гигантский комплекс развлечений, снискавший мировую известность, включает парки, отели, сказочные «страны» и целые жилые районы. По посещаемости Диснейлэнд превосходит все туристические объекты стран Старого Света. Общая площадь грандиозного сказочного комплекса составляет 1 943 гектара, а на его территории ежегодно отдыхает и развлекается более 12,5 миллионов посетителей.',
            de:
              'Dieser gigantische, weltbekannte Unterhaltungskomplex umfasst Parks, Hotels, fabelhafte "Länder" und ganze Wohngebiete. In Bezug auf die Besucherzahlen übertrifft Disneyland alle Sehenswürdigkeiten in den Ländern der Alten Welt. Die Gesamtfläche des grandiosen Märchenkomplexes beträgt 1.943 Hektar, und mehr als 12,5 Millionen Besucher ruhen sich jährlich aus und haben Spaß auf seinem Territorium.',
          },
        },
      ],
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

      timeZone: 'Asia/Shanghai',
      currencyCode: 'CNY',
      currencyName: {
        en: 'yuan',
        ru: 'юань',
        de: 'yuan',
      },

      shortInfo: {
        en:
          'China is a state in East Asia. It ranks third in the world in terms of territory (9,598,962 km2), behind Russia and Canada, and in terms of population - 1,415,515,674 inhabitants - the first. The majority of the population is ethnic Chinese.',
        ru:
          'Китай — государство в Восточной Азии. Занимает третье место в мире по территории (9 598 962 км2), уступая России и Канаде, а по численности населения — 1 415 515 674 жителей — первое. Большинство населения — этнические китайцы.',
        de:
          'China ist ein Staat in Ostasien. Es liegt weltweit an dritter Stelle in Bezug auf das Territorium (9 598 962 km2) nach Russland und Kanada und in Bezug auf die Bevölkerung - 1 415 515 674 Einwohner - an erster Stelle. Die Mehrheit der Bevölkerung sind ethnische Chinesen.',
      },
      video: {
        en: videoChinaEN,
        ru: videoChinaRU,
        de: videoChinaDE,
      },
      sightseeings: [
        {
          img: greatWall,
          name: {
            en: 'The great Wall of China',
            ru: 'Великая Китайская стена',
            de: 'Chinesische Mauer',
          },
          shortInfo: {
            en:
              'The Great Wall of China is an impressive landmark in China, a grandiose monument of antiquity and is considered the longest structure in the world built for defense purposes. It passes through North China for almost 9 thousand kilometers.',
            ru:
              'Великая Китайская стена является внушительной достопримечательностью Китая, грандиозным памятником древности и считается самым длинным сооружением в мире, возведённым в целях обороны. Она проходит по Северному Китаю на протяжении почти 9 тыс. километров.',
            de:
              'Die Chinesische Mauer ist ein beeindruckendes Wahrzeichen Chinas, ein grandioses Denkmal der Antike und gilt als das längste Bauwerk der Welt, das zu Verteidigungszwecken errichtet wurde. Es führt fast 9.000 Kilometer durch Nordchina.',
          },
        },
        {
          img: potalaPalace,
          name: {
            en: 'Potala Palace',
            ru: 'Дворец Потала',
            de: 'Potala-Palast',
          },
          shortInfo: {
            en:
              'The Royal Palace and the Buddhist temple complex of Lhasa, located in Tibet at an altitude of 3.8 km above sea level, is an important landmark in China among the shrines. The palace served as the main residence of the Dalai Lama. No palace in the world is located as high in the mountains as the Potala.',
            ru:
              'Царский дворец и буддийский храмовый комплекс Лхаса, расположенный в Тибете на высоте 3,8 км над уровнем моря, представляет собой важную достопримечательность Китая в числе святынь. Дворец выполнял роль основной резиденции Далай-Ламы. Ни один дворец в мире не расположен так высоко в горах, как Потала.',
            de:
              'Der Königspalast und der buddhistische Tempelkomplex von Lhasa in Tibet auf einer Höhe von 3,8 km über dem Meeresspiegel sind ein wichtiges Wahrzeichen Chinas unter den Schreinen. Der Palast diente als Hauptresidenz des Dalai Lama. Kein Palast der Welt liegt so hoch in den Bergen wie der Potala.',
          },
        },
        {
          img: terracottaArmy,
          name: {
            en: 'Terracotta Army',
            ru: 'Терракотовая армия',
            de: 'Terracotta Armee',
          },
          shortInfo: {
            en:
              'This is a military garrison of many thousands, but not military, but clay statues with a height of 1.9 - 1.95 meters. This wonder of the world is known as the Terracotta Army, and its history goes back more than 2 thousand years. In total, the underground burials include at least 8099 statues of Chinese warriors and their horses, made of terracotta clay.',
            ru:
              'Это многотысячный военный гарнизон, но не военных, а глиняных статуй ростом 1,9 — 1,95 метра. Это чудо света известно как Терракотовая армия, а его история насчитывает более 2 тысяч лет. Всего подземные захоронения включают минимум 8099 статуй китайских воинов и их лошадей, изготовленных из терракотовой глины.',
            de:
              'Dies ist eine militärische Garnison von vielen Tausenden, aber keine militärischen, sondern Tonstatuen mit einer Höhe von 1,9 - 1,95 Metern. Dieses Weltwunder ist als Terrakotta-Armee bekannt und seine Geschichte reicht mehr als zweitausend Jahre zurück. Insgesamt umfassen die unterirdischen Bestattungen mindestens 8099 Statuen chinesischer Krieger und ihrer Pferde aus Terrakotta-Ton.',
          },
        },
        {
          img: giantBuddha,
          name: {
            en: 'Leshan Giant Buddha',
            ru: 'Гигантский Будда в Лэшане',
            de: 'Leshan Riesenbuddha',
          },
          shortInfo: {
            en:
              'The landmark of China in the form of a giant Buddha is located at the confluence of three rivers, the oncoming streams of which form dangerous whirlpools. Many local residents and fishermen perished in these streams, therefore, according to legend, the monk Hai Tun decided to tame the elements by cutting out the image of a deity in the rock.',
            ru:
              'Достопримечательность Китая в виде гигантского Будды располагается в месте слияния трёх рек, встречные потоки которых образуют опасные водовороты. В этих потоках погибло немало местных жителей и рыбаков, поэтому, согласно преданию, монах Хай Тун решил укротить стихию, вырубив в скале образ божества.',
            de:
              'Das Wahrzeichen Chinas in Form eines riesigen Buddha befindet sich am Zusammenfluss von drei Flüssen, deren entgegenkommende Bäche gefährliche Strudel bilden. Viele Anwohner und Fischer kamen in diesen Bächen ums Leben. Der Legende nach beschloss der Mönch Hai Tun, die Elemente zu zähmen, indem er das Bild einer Gottheit im Felsen ausschnitt.',
          },
        },
        {
          img: hongKong,
          name: { en: 'Hong Kong', ru: 'Гонконг', de: 'Hongkong' },
          shortInfo: {
            en:
              'Hong Kong is a city on the southern coast of China, located on more than 260 islands and has its own special social, economic and political status. Today it is also a major financial and business center that plays a leading role on the world stage.',
            ru:
              'Гонконг — город на южном побережье Китая, расположенный более чем на 260 островах и имеющий свой особый социальный, экономический и политический статус. Сегодня это также крупный финансовый и деловой центр, который играет ведущие роли на мировой арене.',
            de:
              'Hongkong ist eine Stadt an der Südküste Chinas, die auf mehr als 260 Inseln liegt und einen besonderen sozialen, wirtschaftlichen und politischen Status hat. Heute ist es auch ein wichtiges Finanz- und Geschäftszentrum, das auf der Weltbühne eine führende Rolle spielt.',
          },
        },
        {
          img: shaolin,
          name: { en: 'Shaolin', ru: 'Шаолинь', de: 'Shaolin' },
          shortInfo: {
            en:
              'Shaolin Monastery is the oldest Buddhist shrine and world-famous landmark of China, located in Henan province, in an unusually beautiful frame of forests and mountains. This place has long kept a sacred spirit, because even in the 5th century A.D. a Taoist temple was founded here, which was occupied by supporters of Buddhism during the period of religious oppression.',
            ru:
              'Монастырь Шаолинь — старейшая буддийская святыня и известная на весь мир достопримечательность Китая, расположенная в провинции Хэнань, в необычайно красивом обрамлении лесов и гор. Это место издавна хранило священный дух, ведь ещё в 5 веке н.э. здесь был основан даосский храм, который в период религиозных притеснений заняли сторонники буддизма.',
            de:
              'Das Shaolin-Kloster ist das älteste buddhistische Heiligtum und weltberühmte Wahrzeichen Chinas. Es befindet sich in der Provinz Henan in einem ungewöhnlich schönen Rahmen aus Wäldern und Bergen. Dieser Ort hat lange Zeit einen heiligen Geist bewahrt, denn selbst im 5. Jahrhundert nach Christus. Hier wurde ein taoistischer Tempel gegründet, der während der Zeit der religiösen Unterdrückung von Anhängern des Buddhismus besetzt war.',
          },
        },
      ],
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
      mainPhoto: washington,

      timeZone: 'America/New_York',
      currencyCode: 'USD',
      currencyName: {
        en: 'US dollar',
        ru: 'доллар США',
        de: 'US dollar',
      },

      shortInfo: {
        en:
          'The United States of America is a state in North America. Area - 9.5 million km² (4th place in the world). Population - about 329 million people (3rd place in the world). The United States has a federal form of structure, administratively divided into 50 states and the Federal District of Columbia.',
        ru:
          'Соединённые Штаты Америки — государство в Северной Америке. Площадь — 9,5 млн км² (4-е место в мире). Население — около 329 млн человек (3-е место в мире). США имеют федеративную форму устройства, административно делятся на 50 штатов и федеральный округ Колумбия.',
        de:
          'Die Vereinigten Staaten von Amerika sind ein Staat in Nordamerika. Fläche - 9,5 Millionen km² (4. Platz in der Welt). Bevölkerung - ungefähr 329 Millionen Menschen (3. Platz in der Welt). Die Vereinigten Staaten haben eine föderale Struktur, die administrativ in 50 Staaten und den District of Columbia unterteilt ist.',
      },
      video: {
        en: videoUsaEN,
        ru: videoUsaRU,
        de: videoUsaDE,
      },
      sightseeings: [
        {
          img: statueofLiberty,
          name: {
            en: 'The Statue of Liberty',
            ru: 'Статуя Свободы',
            de: 'Freiheitsstatue',
          },
          shortInfo: {
            en:
              "The majestic sculpture of a woman with a torch in her hand, outstretched to heaven, has become the personification of America's freedom. The crown on her head has seven rays, which means seven continents and seven oceans (in Western geographic tradition). In her other hand, she holds a plate with the date of the adoption of the Declaration of Independence carved into it.",
            ru:
              'Величественная скульптура женщины с факелом в руке, протянутым в небеса, стала олицетворением свободы Америки. Корона на ее голове имеет семь лучей, что обозначает семь континентов и семь океанов (по западной географической традиции). В другой руке она держит плиту с выбитой на ней датой принятия Декларации о независимости.',
            de:
              'Die majestätische Skulptur einer Frau mit einer Fackel in der Hand, die zum Himmel ausgestreckt ist, ist zur Personifikation der Freiheit Amerikas geworden. Die Krone auf ihrem Kopf hat sieben Strahlen, was sieben Kontinente und sieben Ozeane bedeutet (in westlicher geografischer Tradition). In der anderen Hand hält sie ein Schild mit dem Datum der Annahme der Unabhängigkeitserklärung.',
          },
        },
        {
          img: centralPark,
          name: {
            en: 'Central park',
            ru: 'Центральный парк',
            de: 'Zentralpark',
          },
          shortInfo: {
            en:
              "It is an oasis of tranquility in Manhattan's busy business. The green area is 4 km long and 800 meters wide. The park was opened in 1859. Tens of thousands of workers improved the territory for another 20 years. About 5 million trees were planted, and the land was brought from ecologically clean areas.",
            ru:
              'Это оазис спокойствия в бурном деловом потоке Манхэттена. Зеленая зона раскинулась на 4 км в длину и 800 метров в ширину. Открытие парка состоялось в 1859 году. Десятки тысяч рабочих еще 20 лет облагораживали территорию. Было посажено около 5 млн деревьев, а землю привозили из экологически чистых зон.',
            de:
              'Es ist eine Oase der Ruhe im geschäftigen Geschäft von Manhattan. Die Grünfläche ist 4 km lang und 800 m breit. Der Park wurde 1859 eröffnet. Zehntausende Arbeiter verbesserten das Territorium für weitere 20 Jahre. Etwa 5 Millionen Bäume wurden gepflanzt und das Land aus ökologisch sauberen Zonen gebracht.',
          },
        },
        {
          img: chinaTown,
          name: { en: 'Chinatown', ru: 'Чайна-таун', de: 'Chinatown' },
          shortInfo: {
            en:
              "In Chinatown, a popular habitat for the Chinese diaspora, a stone's throw from the fashionable areas of the Big Apple, time slows down. Ethnic flavor shines through in this place in everything: traditional elements of the architecture of the Middle Kingdom, red lanterns, signs written in hieroglyphs, noisy crowds of immigrants from China, Vietnam and other Far Eastern countries.",
            ru:
              'В Чайна-тауне – популярном месте обитания китайской диаспоры, в двух шагах от фешенебельных районов Большого Яблока время замедляет свой бег. Этнический колорит сквозит в этом месте во всем: традиционные элементы архитектуры Поднебесной, красные фонарики, вывески, написанные иероглифами, шумные толпы выходцев из Китая, Вьетнама и прочих дальневосточных стран.',
            de:
              'In Chinatown, einem beliebten Lebensraum für die chinesische Diaspora, nur einen Steinwurf von den modischen Gegenden des Big Apple entfernt, verlangsamt sich die Zeit. Ethnisches Flair kommt an diesem Ort in allem zum Ausdruck: traditionelle Elemente der Architektur des Reiches der Mitte, rote Laternen, Zeichen in Hieroglyphen, laute Massen von Einwanderern aus China, Vietnam und anderen fernöstlichen Ländern.',
          },
        },
        {
          img: whiteHouse,
          name: { en: 'The White house', ru: 'Белый Дом', de: 'Weißes Haus' },
          shortInfo: {
            en:
              "The White House is the symbol of America's democracy. The residence of the country's rulers is named after the color of the building itself. It is one of the main attractions in the United States, and every year about one and a half million tourists flock to the capital to see the grandeur and beauty of the world famous building.",
            ru:
              'Белый Дом является символом демократии Америки. Резиденция правителей страны названа в честь цвета самого здания. Это одна из главных достопримечательностей в США, и каждый год около полутора миллионов туристов съезжаются в столицу, чтобы увидеть величие и красоту всемирно известного здания.',
            de:
              'Das Weiße Haus ist das Symbol der amerikanischen Demokratie. Die Residenz der Herrscher des Landes ist nach der Farbe des Gebäudes selbst benannt. Es ist eine der Hauptattraktionen in den Vereinigten Staaten, und jedes Jahr strömen ungefähr eineinhalb Millionen Touristen in die Hauptstadt, um die Größe und Schönheit des weltberühmten Gebäudes zu sehen.',
          },
        },
        {
          img: pentagon,
          name: { en: 'Pentagon', ru: 'Пентагон', de: 'Pentagon' },
          shortInfo: {
            en:
              "The building is the largest of all office buildings in the world. It has the shape of a pentagram, which is why it is called so. The total area of ​​the complex is 600 thousand square meters. meters. It has 7 floors, 2 of which are underground. The height of the building is 23 meters. The area of ​​the courtyard is 21 thousand square meters. meters. This is where the country's Ministry of Defense is located.",
            ru:
              'Здание является самым большим из всех офисных сооружений мира. Имеет форму пентаграммы, из-за чего так и называется. Общая площадь комплекса равна 600 тыс. кв. метров. В нем 7 этажей, 2 из которых подземные. Высота строения 23 метра. Площадь внутреннего двора составляет 21 тыс. кв. метров. Именно здесь находится Министерство обороны страны.',
            de:
              'Das Gebäude ist das größte aller Bürogebäude der Welt. Es hat die Form eines Pentagramms, weshalb es so genannt wird. Die Gesamtfläche des Komplexes beträgt 600.000 Quadratmeter. Meter. Es hat 7 Etagen, von denen 2 unterirdisch sind. Die Höhe des Gebäudes beträgt 23 Meter. Die Fläche des Hofes beträgt 21 Tausend Quadratmeter. Meter. Hier befindet sich das Verteidigungsministerium des Landes.',
          },
        },
        {
          img: lasVegas,
          name: { en: 'Las Vegas', ru: 'Лас-Вегас', de: 'Las Vegas' },
          shortInfo: {
            en:
              'Las Vegas is deservedly considered the largest center of the gambling (gambling) industry. The city is filled with many casinos and hotels. Endless concerts and light shows do not let tourists get bored around the clock. Coming here, be prepared not to sleep from night to morning. It is a city of big lights and money, desires and their fulfillment.',
            ru:
              'Лас-Вегас заслуженно считается крупнейшим центром игровой (азартной) индустрии. Город наполнен множеством казино и отелей. Нескончаемые концерты и световые шоу не дают заскучать туристам круглые сутки. Приезжая сюда, будьте готовы не спать с ночи до утра. Это город больших огней и денег, желаний и их исполнения.',
            de:
              'Las Vegas gilt zu Recht als das größte Zentrum der Glücksspielbranche. Die Stadt ist mit vielen Casinos und Hotels gefüllt. Endlose Konzerte und Lichtshows lassen Touristen nicht rund um die Uhr gelangweilt werden. Wenn Sie hierher kommen, sollten Sie darauf vorbereitet sein, nicht von Nacht bis Morgen zu schlafen. Es ist eine Stadt der großen Lichter und des Geldes, der Wünsche und ihrer Erfüllung.',
          },
        },
      ],
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
      mainPhoto: tokyo,

      timeZone: 'Asia/Tokyo',
      currencyCode: 'JPY',
      currencyName: {
        en: 'Yen',
        ru: 'Иена',
        de: 'Yen',
      },

      shortInfo: {
        en:
          'Japan is an island nation in East Asia. Located in the Pacific Ocean east of the Sea of ​​Japan, China, North and South Korea, Russia. Located in the Japanese archipelago, which consists of 6852 islands. The four largest islands - Honshu, Hokkaido, Kyushu and Shikoku - account for 97% of the total area of ​​the archipelago. With a population of nearly 126 million, Japan is ranked eleventh in the world.',
        ru:
          'Япония — островное государство в Восточной Азии. Находится в Тихом океане к востоку от Японского моря, Китая, Северной и Южной Кореи, России. Расположена на Японском архипелаге, состоящем из 6852 островов. Четыре крупнейших острова — Хонсю, Хоккайдо, Кюсю и Сикоку — составляют 97 % общей площади архипелага. С населением почти 126 миллионов человек, Япония занимает одиннадцатое место в мире.',
        de:
          'Japan ist ein Inselstaat in Ostasien. Das Hotel liegt im Pazifischen Ozean östlich des Japanischen Meeres, China, Nord- und Südkorea, Russland. Das Hotel liegt im japanischen Archipel, das aus 6852 Inseln besteht. Die vier größten Inseln - Honshu, Hokkaido, Kyushu und Shikoku - machen 97% der Gesamtfläche des Archipels aus. Mit fast 126 Millionen Einwohnern liegt Japan weltweit an elfter Stelle.',
      },
      video: {
        en: videoJapanEN,
        ru: videoJapanRU,
        de: videoJapanDE,
      },
      sightseeings: [
        {
          img: fushimiInariShrine,
          name: {
            en: 'Fushimi-inari shrine',
            ru: 'Храм Фусими-инари',
            de: 'Fushimi-Inari-Schrein',
          },
          shortInfo: {
            en:
              'One of the historical symbols of Japan is the Fushimi-Inari Temple or the Thousand Scarlet Gates Shrine dedicated to the goddess of rice fertility. The grandiose tunnels with portals for the gods were created according to the Shinto beliefs. The Japanese believe that visiting the Fushimi-Inari Shrine brings success and prosperity.',
            ru:
              'Одним из исторических символов Японии считается Храм Фусими-Инари или Святилище из тысячи алых ворот, посвященное богине рисового плодородия. Грандиозные тоннели с порталами, предназначенными для богов, создавались, согласно верованию синтоизма. Японцы считают, что посещение Храма Фусими-Инари приносит успех и процветание.',
            de:
              'Eines der historischen Symbole Japans ist der Fushimi-Inari-Tempel oder der Schrein der Tausend Scharlachroten Tore, der der Göttin der Reisfruchtbarkeit gewidmet ist. Die grandiosen Tunnel mit Portalen für die Götter wurden nach shintoistischem Glauben geschaffen. Die Japaner glauben, dass der Besuch des Fushimi-Inari-Schreins Erfolg und Wohlstand bringt.',
          },
        },
        {
          img: skyTree,
          name: {
            en: 'Heavenly tree',
            ru: 'Небесное дерево',
            de: 'Himmlischer Baum',
          },
          shortInfo: {
            en:
              'Tokyo Sky Tree is the second tallest TV tower in the world. This graceful architectural structure of glass, concrete and metal soared into the sky, thanks to the efforts of experienced designers and engineers. The height of the building is 634 meters.',
            ru:
              'Небесное дерево Токио – вторая по высоте телебашня в мире. Это изящное архитектурное строение из стекла, бетона и металла взметнулось ввысь, благодаря стараниям опытных конструкторов и инженеров. Высота сооружения составляет 634 метра.',
            de:
              'Tokyo Sky Tree ist der zweithöchste Fernsehturm der Welt. Diese anmutige architektonische Struktur aus Glas, Beton und Metall stieg dank der Bemühungen erfahrener Designer und Ingenieure in den Himmel. Die Höhe des Gebäudes beträgt 634 Meter.',
          },
        },
        {
          img: odaiba,
          name: {
            en: 'Garbage island',
            ru: 'Мусорный остров',
            de: 'Müllinsel',
          },
          shortInfo: {
            en:
              "The futuristic city of the future is located on Odaiba Island in Tokyo Harbor. It is a pedestrian's paradise, a holiday city with thousands of lights. Why was the island named Garbage? In 1979, it was merged with a garbage dump, which did not prevent the original place from developing at a rapid pace.",
            ru:
              'Футуристический город будущего расположен на острове Одайба в Токийской гавани. Это рай для пешеходов, город-праздник, светящийся тысячами огней. Почему остров получил название Мусорного? В 1979 году он был объединен с мусорной свалкой, что вовсе не помешало оригинальному месту развиваться стремительными темпами.',
            de:
              'Die futuristische Stadt der Zukunft liegt auf der Insel Odaiba im Hafen von Tokio. Es ist ein Fußgängerparadies, eine Ferienstadt mit Tausenden von Lichtern. Warum wurde die Insel Müll genannt? 1979 wurde es mit einer Müllkippe zusammengelegt, was die ursprüngliche Entwicklung des ursprünglichen Ortes nicht verhinderte.',
          },
        },
        {
          img: asakusa,
          name: {
            en: 'Asakusa area',
            ru: 'Район Асакуса',
            de: 'Asakusa Bereich',
          },
          shortInfo: {
            en:
              'The sights of Japan are unique and inimitable. These include the Asakusa area in central Tokyo with an old-city vibe. It is here that the Japanese flavor dominates the urbanization of the huge metropolis. In the Asakusa area, Japanese traditions are sacred, there is absolutely no transport on the streets, but there are many cozy restaurants and cafes with Japanese cuisine, there are souvenir shops and shops.',
            ru:
              'Достопримечательности Японии уникальны и неповторимы. К ним относится район Асакуса в центральной части Токио с атмосферой старого города. Именно здесь японский колорит доминирует над урбанизацией огромного мегаполиса. В районе Асакуса свято чтут японские традиции, на улочках совершенно нет транспорта, но расположено множество уютных ресторанов и кафе с японской кухней, есть сувенирные лавки и магазины.',
            de:
              'Die Sehenswürdigkeiten Japans sind einzigartig und unnachahmlich. Dazu gehört das Asakusa-Gebiet im Zentrum von Tokio mit einer Atmosphäre der Altstadt. Hier dominiert das japanische Flair die Urbanisierung der riesigen Metropole. In der Gegend von Asakusa sind japanische Traditionen heilig, es gibt absolut keinen Transport auf den Straßen, aber es gibt viele gemütliche Restaurants und Cafés mit japanischer Küche, es gibt Souvenirläden und Geschäfte.',
          },
        },
        {
          img: fuji,
          name: { en: 'Mount fuji', ru: 'Гора Фудзи', de: 'Berg Fuji' },
          shortInfo: {
            en:
              'The symbol of the land of the rising sun is the sacred mountain Fuji. What to visit in Japan outside the capital? You should definitely see the young Fujiyama volcano close by. The Japanese believe that the mountain was created by the gods out of chaos. It is the most recognizable landmark in the country. The majestic mountain peak rises to the skies at a height of 3776 meters. Many pilgrims climb Mount Fuji.',
            ru:
              'Символ страны восходящего солнца – священная гора Фудзи. Что посетить в Японии за пределами столицы? Обязательно стоит увидеть вблизи молодой вулкан Фудзияма. Японцы считают, что гора богами сотворена из хаоса. Это самая узнаваемая достопримечательность страны. Величественный горный пик возносится к небесам на высоту 3776 метров. Многие пилигримы осуществляют подъем на гору Фудзи.',
            de:
              'Das Symbol des Landes der aufgehenden Sonne ist der heilige Berg Fuji. Was in Japan außerhalb der Hauptstadt zu besuchen? Sie sollten auf jeden Fall den jungen Fujiyama-Vulkan in der Nähe sehen. Die Japaner glauben, dass der Berg von den Göttern aus dem Chaos geschaffen wurde. Es ist das bekannteste Wahrzeichen des Landes. Der majestätische Berggipfel erhebt sich in 3776 Metern Höhe in den Himmel. Viele Pilger besteigen den Fuji.',
          },
        },
        {
          img: goldenPavilion,
          name: {
            en: 'Golden Pavilion',
            ru: 'Золотой павильон',
            de: 'Goldener Pavillon',
          },
          shortInfo: {
            en:
              'The gem of the architectural collection of Japan is considered the Golden Pavilion - Kinkakuji. The palace, covered with gold, is striking in its beauty and luxury. It cannot be compared with other attractions in Japan. The beautiful palace was built in 1397. Its walls sparkle in the sun with incomprehensible beauty. Kinkakuji is part of the Rokuonji temple complex and is considered the best example of national culture.',
            ru:
              'Жемчужиной архитектурной коллекции Японии считается Золотой павильон – Кинкакудзи. Дворец, покрытый золотом, поражает красотой и роскошью. С ним не могут сравниться другие достопримечательности Японии. Прекрасный дворец был построен в 1397 году. Его стены сверкают на солнце непостижимой красотой. Кинкакудзи входит в храмовый комплекс Рокуондзи и считается лучшим образцом национальной культуры.',
            de:
              'Das Juwel der japanischen Architektursammlung gilt als Goldener Pavillon - Kinkakuji. Der mit Gold bedeckte Palast besticht durch seine Schönheit und seinen Luxus. Es kann nicht mit anderen Attraktionen in Japan verglichen werden. Der schöne Palast wurde 1397 erbaut. Seine Wände funkeln in der Sonne mit unverständlicher Schönheit. Kinkakuji ist Teil des Rokuonji-Tempelkomplexes und gilt als das beste Beispiel für nationale Kultur.',
          },
        },
      ],
    },
  ],

  curLang: 'en',

  userData: {},
};

export default data;
