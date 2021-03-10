import style from './Search.module.scss';
import cn from 'classnames';
import { searchText } from '../../data/dataFront';
import { LangType } from '../../store/mainPage/types';
import { SearchInputType, SearchPropsType } from './Types';
import React, {
  KeyboardEventHandler,
  useRef,
  useState,
} from 'react';
import { withRouter } from 'react-router';
import { getAppropriatedCards } from './utills';
import { useDispatchAction } from '../../store/store';
import { setCountriesData } from '../../store/mainPage/actions';

const Search: React.FC<SearchPropsType> = ({ curLang, history }) => {
  const dispatch = useDispatchAction();
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('');

  const isMainPage: boolean = history.location.pathname === '/';
  const curSearchText: LangType = searchText;

  const onChangeText: SearchInputType = (event) => {
    setText(event.target.value);
    const appropriatedCards = getAppropriatedCards(event, curLang);
    dispatch(setCountriesData(appropriatedCards));
  };

  const onPressEnter: KeyboardEventHandler = (e) => {
    e.key === 'Enter' && inputRef.current?.blur();
  };

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
            ref={inputRef}
            onKeyPress={onPressEnter}
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
