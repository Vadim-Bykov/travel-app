import React from 'react';

// style
import style from './ErrorComponent.module.scss'

const ErrorComponent: React.FC<{containerClazz: string, errorText: string}> = ({ containerClazz, errorText }) => {
  return (
    <div className={containerClazz}>
      <p className={style.error}>{errorText}</p>
    </div>
  )
}

export default ErrorComponent;
