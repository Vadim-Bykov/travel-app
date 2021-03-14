import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestSettingUserData } from '../../store/auth/operations';
import { getIsAuth } from '../../store/auth/selectors';
import { UserDataType } from '../../store/auth/types';
import { useDispatchThunk } from '../../store/store';
import style from './Login.module.scss';
import { ReduxLoginForm } from './LoginForm';
import { loginData } from '../../data/dataFront';
import { getCurLang } from '../../store/mainPage/selectors';

const Login: React.FC = () => {
  const curLang: string = useSelector(getCurLang);
  const isAuth: boolean = useSelector(getIsAuth);
  const dispatch = useDispatchThunk();

  if (isAuth) return <Redirect to='/' />;

  const onSubmitForm = (formData: UserDataType) => {
    dispatch(requestSettingUserData(formData));
  };

  return (
    <div className={style.loginBlock}>
      <h3>{loginData.formTitle[curLang]}</h3>
      <ReduxLoginForm onSubmit={onSubmitForm} />
    </div>
  );
};

export default Login;
