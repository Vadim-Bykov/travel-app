import { changeLanguage } from '../../store/mainPage/operations';
import { useDispatchThunk } from '../../store/store';
import style from './SelectLang.module.scss';
import { OnChangeSelect, SelectPropsType } from './Types';
import { selectLangValue } from '../../data/dataFront';
import { LangType } from '../../store/mainPage/types';
// import cn from 'classnames';

const SelectLang: React.FC<SelectPropsType> = ({ curLang }) => {
  const dispatch = useDispatchThunk();

  const enLanguage: LangType = selectLangValue[0];
  const ruLanguage: LangType = selectLangValue[1];
  const deLanguage: LangType = selectLangValue[2];

  const onChangeLang: OnChangeSelect = (event) => {
    const lang: string = event.target.value;
    dispatch(changeLanguage(lang));
  };

  return (
    <div className={style.selectBlock}>
      <select
        className='custom-select mr-sm-2'
        value={curLang}
        onChange={onChangeLang}
      >
        <option value='en'>{enLanguage[curLang]}</option>
        <option value='ru'>{ruLanguage[curLang]}</option>
        <option value='de'>{deLanguage[curLang]}</option>
      </select>
    </div>
  );
};

export default SelectLang;
