import { NavLink } from 'react-router-dom';
import style from './Main.module.scss';
import cn from 'classnames';
import { CardPropsType } from './Types';

const CountryCard:React.FC<CardPropsType> = ({country, curLang, cardBtnTitle}) => {

   const { id, mainPhoto, name, capital } = country;

   return (
      <div className={cn("card", style.card)}>
         <img className={cn("card-img-top", style.img)} src={mainPhoto} alt="Card"></img>
         <div className="card-body">
            <h5 className="card-title">{name[curLang]}</h5>
            <p className="card-text">{capital[curLang]}</p>
            <NavLink to={`./${id}`} className="btn btn-primary">{cardBtnTitle[curLang]}</NavLink>
         </div>
      </div>
   );
}

export default CountryCard;