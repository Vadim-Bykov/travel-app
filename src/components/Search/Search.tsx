import style from './Search.module.scss';
import cn from 'classnames';
import { searchText } from '../../data/dataFront';
import { LangType } from '../../store/mainPage/types';
import { SearchInputType, SearchPropsType } from './Types';
import React, { useState } from 'react';
import { withRouter } from 'react-router';

const Search: React.FC<SearchPropsType> = ({ curLang, history }) => {
  const isMainPage: boolean = history.location.pathname === '/';

  const [text, setText] = useState('');
  const onChangeText: SearchInputType = (event) => {
    setText(event.target.value);
  };

  const curSearchText: LangType = searchText;

  return (
    <div className={style.searchBlock}>
      {isMainPage && (
        <>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder={curSearchText[curLang]}
            value={text}
            onChange={onChangeText}
            autoFocus={true}
          ></input>
          <button
            className={cn('btn btn-outline-success my-2 my-sm-0', style.btn)}
          >
            {curSearchText[curLang]}
          </button>
        </>
      )}
    </div>
  );
};

export default withRouter(Search);
