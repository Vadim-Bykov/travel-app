import { AppStateType } from "../store";
import { CountryDataType } from "./types";

export const getCountryData = (state: AppStateType): CountryDataType => state.countryPage.countryData;
