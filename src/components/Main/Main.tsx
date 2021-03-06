import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatchThunk } from '../../store/store';
import {
  requestCountriesData,
  requestLanguage,
} from '../../store/mainPage/operations';
import { getCountries, getCurLang } from '../../store/mainPage/selectors';
import { CountriesType } from '../../store/mainPage/types';
import CountryCard from './CountryCard';
import style from './Main.module.scss';

const Main = () => {
  const countries: Array<CountriesType> = useSelector(getCountries);
  const curLang: string = useSelector(getCurLang);

  const dispatch = useDispatchThunk();

  useEffect(() => {
    dispatch(requestCountriesData());
    dispatch(requestLanguage());
  }, [dispatch]);

  const countryCards = countries.map((country: CountriesType) => (
    <CountryCard key={country.id} country={country} curLang={curLang} />
  ));

  return <main className={style.main}>{countryCards}</main>;
};

export default Main;
