import { NavLink } from 'react-router-dom';
import style from './Main.module.scss';
import cn from 'classnames';
import { CardPropsType } from './Types';

const CountryCard:React.FC<CardPropsType> = ({country, curLang}) => {
console.log(curLang);

   return (
      <div className={cn("card", style.card)}>
         <img className="card-img-top" src={country.mainPhoto} alt="Card"></img>
         <div className="card-body">
            <h5 className="card-title">{country.name['en']}</h5>
            <p className="card-text">{country.capital['en']}</p>
            <NavLink to="#" className="btn btn-primary">Переход куда-нибудь</NavLink>
         </div>
      </div>
   );
}

export default CountryCard;