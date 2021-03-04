import { connect } from 'react-redux';
import { getCountries, getCurLang } from '../../store/mainPage/selectors';
import { CountriesType } from '../../store/mainPage/state';
import { AppStateType } from '../../store/store';
import CountryCard from './CountryCard';
import style from './Main.module.scss'
import { MapStatePropsType, PropsType } from './Types';



const Main: React.FC<PropsType> = ({countries, curLang}) => {

   const countryCards = countries.map((country:CountriesType) => <CountryCard
      key={country.id}
      country={country}
      curLang={curLang}
      // name={country.name[curLang]}
      // capital={country.capital[curLang]}
      // mainPhoto={country.mainPhoto}
   />)

   return (
      <main className={style.main} >
         {countryCards}
      </main>
   );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   countries: getCountries(state),
   curLang: getCurLang(state)
});

export default connect(mapStateToProps)(Main);