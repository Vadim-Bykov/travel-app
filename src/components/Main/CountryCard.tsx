import { NavLink } from 'react-router-dom';
import style from './Main.module.scss';
import cn from 'classnames';
import { CardPropsType } from './Types';
import { cardBtnTitle } from '../../data/dataFront';
import { LangType } from '../../store/mainPage/types';

const CountryCard: React.FC<CardPropsType> = ({ country, curLang }) => {
  const { id, mainPhoto, name, capital } = country;

  const title: LangType = cardBtnTitle;

  return (
    <div className={cn('card', style.card)}>
      <img
        className={cn('card-img-top', style.img)}
        src={mainPhoto}
        alt='Card'
      ></img>
      <div className='card-body'>
        <h5 className='card-title'>{name[curLang]}</h5>
        <p className='card-text'>{capital[curLang]}</p>
        <NavLink to={`./${id}`} className='btn btn-primary'>
          {title[curLang]}
        </NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
