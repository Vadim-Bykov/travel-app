import { NavLink } from 'react-router-dom'
import style from './Footer.module.scss'

const Footer = () => {

   return (
      <footer className={style.footer} >
         {/* <nav className="navbar navbar-light bg-light"> */}
            <NavLink to='/'>logo</NavLink>
         {/* </nav> */}
      </footer>
   );
}

export default Footer;