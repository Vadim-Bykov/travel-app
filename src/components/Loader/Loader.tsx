import React from 'react';

const Loader: React.FC<{containerClazz: string}> = ({containerClazz}) => {
  return (
    <div className={containerClazz}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  )
}

export default Loader;
