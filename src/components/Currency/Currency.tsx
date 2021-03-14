import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRatioCurrency, getErrorCurrency, getLoadingCurrency } from '../../store/widgets/selectors';
import { updateRatioCurrency } from '../../store/widgets/operations';

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
    <div>
      <div>{ratioUSD}</div>
      <div>{ratioEUR}</div>
      <div>{ratioBYN}</div>
    </div>
  )
}

export default Currency;
