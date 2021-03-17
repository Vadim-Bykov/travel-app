import { TRatioCurrency } from '../store/widgets/types';

const currencyAPIKey = '7ae9664e50e886f95cc454bd';
const currencyURL = 'https://v6.exchangerate-api.com/v6/';


async function getCurrencyAPI (currencyCode: string): Promise<TRatioCurrency> {
  const url = `${currencyURL}${currencyAPIKey}/latest/${currencyCode}`;

  const response = await fetch(url);
  const json = await response.json();

  if (json.result === 'error') throw new Error(json['error-type']);

  const { USD, EUR, BYN } = json.conversion_rates;

  return {
    USD, EUR, BYN
  };
}

export default getCurrencyAPI;
