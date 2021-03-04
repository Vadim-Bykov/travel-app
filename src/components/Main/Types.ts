import { CountriesType } from "../../store/mainPage/state";

export type MapStatePropsType = {
   countries: Array<CountriesType>
   curLang: string
}

export type PropsType = MapStatePropsType;

export type CardPropsType = {
   country: CountriesType
   curLang: string
}