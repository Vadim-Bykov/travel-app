import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestSettingUserData } from '../../store/auth/operations';
import { getIsAuth } from '../../store/auth/selectors';
import { UserDataType } from '../../store/auth/types';
import { useDispatchThunk } from '../../store/store';
import style from './Login.module.scss';
import { ReduxLoginForm } from './LoginForm';

const Login: React.FC = () => {
  const isAuth: boolean = useSelector(getIsAuth);
  const dispatch = useDispatchThunk();

  console.log('Ok');

  if (isAuth) return <Redirect to='/' />;

  const onSubmitForm = (formData: UserDataType) => {
    console.log(formData);
    dispatch(requestSettingUserData(formData));
 }

  
  return (
    <div className={style.loginBlock} >
      <h3>Please, fill in the form.</h3>
      <ReduxLoginForm onSubmit={onSubmitForm} />
    </div>
  );
};

export default Login;
