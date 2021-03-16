import logoRS from '../../assets/img/rs_school_js.svg';
import logoGitHub from '../../assets/img/github.svg';
import style from './Footer.module.scss'

const Footer: React.FC = () => {

   return (
      <footer className={style.footer} >
         <span>2021 </span>
         <img src={logoGitHub} alt="github" width="20" />
         <span className={style.ghLinks}>
            <a href="https://github.com/Vadim-Bykov" target="_blank" title="github.com/Vadim-Bykov" rel="noreferrer">Vadim</a>
            <a href="https://github.com/Vladimir0087" target="_blank" title="github.com/Vladimir0087" rel="noreferrer">Vladimir</a>
            <a href="https://github.com/ruslanchampion" target="_blank" title="github.com/ruslanchampion" rel="noreferrer">Ruslan</a>
            <a href="https://github.com/DmitriyFriz" target="_blank" title="github.com/DmitriyFriz" rel="noreferrer">Dmitriy</a>
         </span>
         <span className={style.logoRS}>
            <a href="https://rs.school/js" target="_blank" title="Курс «JavaScript/Front-end»" rel="noreferrer"><img
               src={logoRS} alt="logo" width="50" /></a>
         </span>
      </footer>
   );
}

export default Footer;