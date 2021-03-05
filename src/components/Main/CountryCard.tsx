import { NavLink } from 'react-router-dom';
import style from './Main.module.scss';
import cn from 'classnames';
import { CardPropsType } from './Types';

const CountryCard:React.FC<CardPropsType> = ({country, curLang, cardBtnTitle}) => {

   return (
      <div className={cn("card", style.card)}>
         <img className={cn("card-img-top", style.img)} src={country.mainPhoto} alt="Card"></img>
         <div className="card-body">
            <h5 className="card-title">{country.name[curLang]}</h5>
            <p className="card-text">{country.capital[curLang]}</p>
            <NavLink to="#" className="btn btn-primary">{cardBtnTitle[curLang]}</NavLink>
         </div>
      </div>
   );
}

export default CountryCard;