import { countriesCopy } from './../../data/dataFront';
import { GetAppropriatedCardsType } from './Types';

export const getAppropriatedCards: GetAppropriatedCardsType = (e, curLang) => {
  e.preventDefault();

  let value = e.target.value.toUpperCase();

  return countriesCopy.filter(
    (country) =>
      country.name[curLang].toUpperCase().includes(value.toUpperCase()) ||
      country.capital[curLang].toUpperCase().includes(value.toUpperCase())
  );
};
