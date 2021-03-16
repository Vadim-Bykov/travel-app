import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { USDName, EURName, BYNName } from '../../data/dataFront';
import { getRatioCurrency, getErrorCurrency, getLoadingCurrency } from '../../store/widgets/selectors';
import { updateRatioCurrency } from '../../store/widgets/operations';
import Loader from '../Loader/Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

// style
import style from './Currency.module.scss'

type TProps = {
  currencyCode: string,
  currencyName: string,
  language: string,
}

const Currency:React.FC<TProps> = ({currencyCode, currencyName, language}) => {
  const loadingCurrency = useSelector(getLoadingCurrency);
  const errorCurrency = useSelector(getErrorCurrency);
  const {USD: ratioUSD, EUR: ratioEUR, BYN: ratioBYN} = useSelector(getRatioCurrency);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateRatioCurrency(currencyCode));
  }, [dispatch, currencyCode]);

  if (loadingCurrency) return <Loader containerClazz={style.container} />
  if (errorCurrency) return <ErrorComponent containerClazz={style.container} errorText={errorCurrency}/>;

  return (
    <div className={style.container}>
      <p>{currencyName} ({currencyCode})</p>
      <div className={style.ratio}>
        <p className={style.ratio_name}>{USDName[language]} (USD)</p>
        <p>{ratioUSD}</p>
      </div>
      <div className={style.ratio}>
        <p className={style.ratio_name}>{EURName[language]} (EUR)</p>
        <p>{ratioEUR}</p>
      </div>
      <div className={style.ratio}>
        <p className={style.ratio_name}>{BYNName[language]} (BYN)</p>
        <p>{ratioBYN}</p>
      </div>
    </div>
  )
}

export default Currency;
