import { NavLink, Route } from 'react-router-dom';
import style from './Header.module.scss';

import logo from '../../assets/img/logo.png';
import Search from '../Search/Search';
import SelectLang from '../Select-lang/SelectLang';
import { useSelector } from 'react-redux';
import { getCurLang } from '../../store/mainPage/selectors';

const Header: React.FC = () => {

   const curLang: string = useSelector(getCurLang);

  return (
    <header className={style.header}>
      <NavLink to='/'>
        <img className={style.logo} src={logo} alt='logo' />
        </NavLink>
        <Route />
      <Search curLang={curLang} />
      <SelectLang curLang={curLang} />
    </header>
  );
};

export default Header;
