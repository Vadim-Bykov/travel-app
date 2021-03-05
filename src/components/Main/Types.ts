import { CountriesType, LangType } from "../../store/mainPage/state";

export type MapStatePropsType = {
   countries: Array<CountriesType>
   curLang: string
   cardBtnTitle: LangType
}

export type PropsType = MapStatePropsType;

export type CardPropsType = {
   country: CountriesType
   curLang: string
   cardBtnTitle: LangType
}