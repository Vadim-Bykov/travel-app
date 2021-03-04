import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'

import logo from '../../assets/img/logo.png'

const Header = () => {

   return (
      <header className={style.header} >
         {/* <nav className="navbar navbar-light bg-light"> */}
            <NavLink to='/main'><img className={style.logo} src={logo} alt="logo" /></NavLink>
         {/* </nav> */}
      </header>
   );
}

export default Header;