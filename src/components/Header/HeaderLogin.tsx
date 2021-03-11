import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

import { useSelector } from 'react-redux';
import { getCurLang } from '../../store/mainPage/selectors';
import { getIsAuth, getUserName } from '../../store/auth/selectors';
import { useDispatchAction } from '../../store/store';
import { resetUserData } from '../../store/auth/actions';
import { loginData } from '../../data/dataFront';

const HeaderLogin: React.FC = () => {
  const curLang: string = useSelector(getCurLang);
  const isAuth: boolean = useSelector(getIsAuth);
  const userName: string | null = useSelector(getUserName);
  const dispatch = useDispatchAction();

  const logout = () => dispatch(resetUserData());

  return (
    <div className={style.infoBlock}>
      {isAuth ? (
        <div className={style.loginInfo}>
          <span>{userName}</span>
          <button onClick={logout}>{loginData.logout[curLang]}</button>
        </div>
      ) : (
        <NavLink to='/login'>{loginData.login[curLang]}</NavLink>
      )}
    </div>
  );
};

export default HeaderLogin;
