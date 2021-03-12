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
import { useParams } from 'react-router';
import CountryPage from '../CountryPage/CountryPage';
import { ParamsType } from '../CountryPage/Types';


const Main: React.FC = () => {
  const countries: Array<CountriesType> = useSelector(getCountries);
  const curLang: string = useSelector(getCurLang);
  const { id } = useParams<ParamsType>();

  const dispatch = useDispatchThunk();

  useEffect(() => {
    dispatch(requestCountriesData());
    dispatch(requestLanguage());
  }, [dispatch]);

  const countryCards = countries.map((country: CountriesType) => (
    <CountryCard key={country.id} country={country} curLang={curLang} />
  ));

  return (
    <>
      {id ? <CountryPage id={id} /> : <main className={style.main}>{countryCards}</main>}
    </>
  );
};

export default Main;
