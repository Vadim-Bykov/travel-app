import style from './Login.module.scss';
import { Field, Form, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength, required, minLength, email } from './validators';
import Input from './Input';
import React from 'react';
import { UserDataType } from '../../store/auth/types';
import { useSelector } from 'react-redux';
import { getCurLang } from '../../store/mainPage/selectors';
import { loginData } from '../../data/dataFront';

const maxLength20 = maxLength(20);
const minLength6 = minLength(6);
const minLength4 = minLength(4);

const LoginForm: React.FC<InjectedFormProps<UserDataType>> = ({
  handleSubmit,
}) => {
  const curLang: string = useSelector(getCurLang);

  return (
    <Form onSubmit={handleSubmit} className={style.form}>
      <Field
        name='userName'
        type='text'
        component={Input}
        label={loginData.username[curLang]}
        validate={[required, maxLength20, minLength4]}
      />

      <Field
        name='email'
        type='text'
        component={Input}
        label={loginData.email[curLang]}
        validate={[required, maxLength20, email]}
      />

      <Field
        name='password'
        type='password'
        component={Input}
        label={loginData.password[curLang]}
        validate={[required, maxLength20, minLength6]}
      />

      <div>
        <button className='btn btn-secondary' type='submit'>
          {loginData.button[curLang]}
        </button>
      </div>
    </Form>
  );
};

export const ReduxLoginForm = reduxForm<UserDataType>({ form: 'loginForm' })(
  LoginForm
);
