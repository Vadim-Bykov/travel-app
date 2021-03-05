import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { requestCountriesData, requestLanguage } from '../../store/mainPage/operations';
import { getCardBtnTitle, getCountries, getCurLang } from '../../store/mainPage/selectors';
import { CountriesType } from '../../store/mainPage/types';
import { AppStateType } from '../../store/store';
import CountryCard from './CountryCard';
import style from './Main.module.scss'
import { MapStatePropsType, PropsType } from './Types';



const Main: React.FC<PropsType> = ({ countries, curLang, cardBtnTitle }) => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(requestCountriesData())
      dispatch(requestLanguage())
   }, []);

   const countryCards = countries.map((country: CountriesType) => <CountryCard
      key={country.id}
      country={country}
      curLang={curLang}
      cardBtnTitle={cardBtnTitle}
   />);

   return (
      <main className={style.main} >
         {countryCards}
      </main>
   );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   countries: getCountries(state),
   curLang: getCurLang(state),
   cardBtnTitle: getCardBtnTitle(state)
});

export default connect(mapStateToProps)(Main);