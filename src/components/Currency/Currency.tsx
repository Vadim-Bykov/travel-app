import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { USDName, EURName, BYNName } from '../../data/dataFront';
import { getRatioCurrency, getErrorCurrency, getLoadingCurrency } from '../../store/widgets/selectors';
import { updateRatioCurrency } from '../../store/widgets/operations';

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

  if (loadingCurrency) return <div>...LOADING</div>
  if (errorCurrency) return <div>{errorCurrency}</div>;

  return (
    <div className={style.container}>
      <p>{currencyName} ({currencyCode})</p>
      <div className={style.ratio}>
        <p>{USDName[language]} (USD)</p>
        <p>{ratioUSD}</p>
      </div>
      <div className={style.ratio}>
        <p>{EURName[language]} (EUR)</p>
        <p>{ratioEUR}</p>
      </div>
      <div className={style.ratio}>
        <p>{BYNName[language]} (BYN)</p>
        <p>{ratioBYN}</p>
      </div>
    </div>
  )
}

export default Currency;
