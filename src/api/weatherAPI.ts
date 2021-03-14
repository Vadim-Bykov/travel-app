import { TWeather } from '../store/widgets/types';

const weatherAPIKey = '9fd213e059e997a4add8f9c9cd136ac8';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';


async function getWeatherAPI (city: string, language: string): Promise<TWeather> {
  const url = `${weatherURL}?q=${city}&units=metric&lang=${language}&appid=${weatherAPIKey}`;

  const response = await fetch(url);
  const json = await response.json();

  if (json.cod !== 200) throw new Error(json.message);

  let { temp: temperature } = json.main;
  const { description, icon } = json.weather[0];

  temperature = Math.round(temperature);

  return {
    temperature, description, icon
  };
}

export default getWeatherAPI;
