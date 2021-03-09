import style from './Login.module.scss';
import cn from 'classnames';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { OwnInputProps } from './Types';

const Input: React.FC<WrappedFieldProps & OwnInputProps> = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  return (
    <div className={style.inputBlock}>
      <label>{label}</label>
      <div className={style.inputWithError}>
        <input
          {...input}
          placeholder={label}
          type={type}
          className={cn('form-control', style.formControl)}
        />
        {touched && error && <span className={style.error}>{error}</span>}
      </div>
    </div>
  );
};

export default Input;
